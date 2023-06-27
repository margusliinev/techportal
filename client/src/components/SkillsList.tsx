import { useGetSkillsQuery } from '../features/api/apiSlice';

const SkillsList = () => {
    const { data } = useGetSkillsQuery(undefined);
    return (
        <ul>
            {data?.skills.map((skill) => {
                return <li key={skill}>{skill}</li>;
            })}
        </ul>
    );
};

export default SkillsList;
