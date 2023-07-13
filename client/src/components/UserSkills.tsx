import { useRef, useState } from 'react';

import { useAddSkillMutation } from '../features/api/apiSlice';
import Wrapper from '../styles/styled_components/components/UserSkills';
import { data } from '../utils/technologies';
import { SkillsList } from '.';

const initialValue = {
    skill: '',
};

const Skills = () => {
    const [addSkill] = useAddSkillMutation();
    const [value, setValue] = useState(initialValue);
    const technologies = [...data];
    const filteredTechnologies = technologies.filter((item) => {
        const searchTerm = value.skill.toLowerCase();
        const technology = item.toLowerCase();
        return searchTerm && technology.includes(searchTerm);
    });
    const errorRef = useRef<HTMLParagraphElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (errorRef.current) {
            errorRef.current.textContent = '';
        }
        setValue({ skill: e.target.value });
    };

    // Check if skill matches the technologies array in Utils.

    const findMatch = (array: string[], value: string): string | null => {
        for (const item of array) {
            if (item.toLowerCase() === value.toLowerCase()) {
                return item;
            }
        }
        return null;
    };

    // If skill matches then make the request and clear the input.

    const onSearch = (item: string) => {
        const match = findMatch(data, item);
        if (!match) {
            if (errorRef.current) {
                errorRef.current.textContent = 'Please choose a skill from the dropdown list';
            }
            return;
        }
        if (match) {
            addSkill({ skill: item }).finally(() => {
                setValue({ skill: '' });
            });
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const match = findMatch(data, value.skill);
        if (!match) {
            if (errorRef.current) {
                errorRef.current.textContent = 'Please choose a skill from the dropdown list';
            }
            return;
        }
        if (match) {
            addSkill({ skill: match }).finally(() => {
                setValue({ skill: '' });
            });
        }
    };

    return (
        <Wrapper>
            <div className='skills-container'>
                <div className='skills-form-column'>
                    <div className='skills-header'>
                        <h6>Your Skills</h6>
                        <p>Select technologies and tools that you are familiar with.</p>
                    </div>
                    <form className='skills-form' onSubmit={handleSubmit}>
                        <p ref={errorRef} className='server-message server-message-error'></p>
                        <div className='form-row'>
                            <label htmlFor='skills' className='form-label'>
                                Add A Skill
                            </label>
                            <div className='skills-input-container'>
                                <div className='skills-search-container'>
                                    <input
                                        type='text'
                                        name='skills'
                                        value={value.skill}
                                        className='form-input'
                                        id='skills'
                                        onChange={handleChange}
                                        required
                                    />
                                    <button type='submit' className='btn'>
                                        Add
                                    </button>
                                </div>
                                <div className={filteredTechnologies.length > 0 ? 'skills-input-dropdown show-dropdown' : 'skills-input-dropdown'}>
                                    {filteredTechnologies.slice(0, 10).map((item) => {
                                        return (
                                            <div className='dropdown-item' key={item} onClick={() => onSearch(item)}>
                                                {item}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className='skills-list-column'>
                    <SkillsList />
                </div>
            </div>
        </Wrapper>
    );
};

export default Skills;
