import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';

import Wrapper from '../styles/styled_components/components/DarkModeToggle';

const DarkModeToggle = () => {
    return (
        <Wrapper>
            <input type='checkbox' id='darkmode-toggle' />
            <label htmlFor='darkmode-toggle'>
                <BsFillMoonFill />
                <BsFillSunFill />
            </label>
        </Wrapper>
    );
};

export default DarkModeToggle;
