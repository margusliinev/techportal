import { useState } from 'react';

import Wrapper from '../styles/styled_components/components/Skills';

const initialValue = '';

const Skills = () => {
    const [value, setValue] = useState<string>(initialValue);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
    };

    return (
        <Wrapper>
            <div className='skills'>
                <div className='skills-header'>
                    <h6>Your Skills</h6>
                    <p>Select the list of technologies that you are familiar with.</p>
                </div>
                <form className='skills-form' onSubmit={handleSubmit}>
                    <div className='form-row'>
                        <label htmlFor='username' className='form-label'>
                            Add a technology
                        </label>
                        <div className='skills-input-container'>
                            <input type='text' name='username' value={value} className='form-input' id='username' onChange={handleChange} required />
                            <button type='submit' className='btn'>
                                Add
                            </button>
                        </div>
                        <p className='form-alert'></p>
                    </div>
                </form>
            </div>
        </Wrapper>
    );
};

export default Skills;
