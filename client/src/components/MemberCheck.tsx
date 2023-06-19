import { Link } from 'react-router-dom';

import Wrapper from '../assets/styled_components/components/MemberCheck';

interface Props {
    message: string;
    endpoint: string;
}

const MemberCheck = ({ message, endpoint }: Props) => {
    return (
        <Wrapper className='member-check'>
            <p>{message}</p>
            <Link to={`/${endpoint}`} type='button' className='member-btn'>
                {endpoint}
            </Link>
        </Wrapper>
    );
};
export default MemberCheck;
