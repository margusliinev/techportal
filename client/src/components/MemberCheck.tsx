import { Link } from 'react-router-dom';

interface Props {
    message: string;
    endpoint: string;
}

const MemberCheck = ({ message, endpoint }: Props) => {
    return (
        <div className='member-check'>
            <p>{message}</p>
            <Link to={`/${endpoint}`} type='button' className='member-btn'>
                {endpoint}
            </Link>
        </div>
    );
};
export default MemberCheck;
