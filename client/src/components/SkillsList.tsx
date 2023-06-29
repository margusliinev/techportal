import { MdClose } from 'react-icons/md';

import { useDeleteSkillMutation, useGetSkillsQuery } from '../features/api/apiSlice';
import Wrapper from '../styles/styled_components/components/SkillsList';

const SkillsList = () => {
    const [deleteSkill] = useDeleteSkillMutation();
    const { data } = useGetSkillsQuery(undefined);

    const handleSubmit = (e: React.FormEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        deleteSkill({ skill: e.currentTarget.value })
            .then(() => {
                return;
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <Wrapper>
            <ul className='skills'>
                {data
                    ? data.skills.map((skill, index) => {
                          return (
                              <li key={index} className='skill'>
                                  <p>{skill}</p>
                                  <button type='submit' value={skill} onClick={handleSubmit}>
                                      <MdClose />
                                  </button>
                              </li>
                          );
                      })
                    : null}
            </ul>
        </Wrapper>
    );
};

export default SkillsList;
