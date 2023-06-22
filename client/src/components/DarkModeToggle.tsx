import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';

import { setTheme } from '../features/navigation/navigationSlice';
import { useAppDispatch, useAppSelector } from '../hooks';
import Wrapper from '../styles/styled_components/components/DarkModeToggle';

const DarkModeToggle = () => {
    const { theme } = useAppSelector((store) => store.navigation);
    const dispatch = useAppDispatch();

    const toggleMode = () => {
        if (theme === 'light-theme') {
            dispatch(setTheme('dark-theme'));
        } else {
            dispatch(setTheme('light-theme'));
        }
    };

    return (
        <Wrapper className='theme-button'>
            <input type='checkbox' id='darkmode-toggle' checked={theme === 'light-theme'} onChange={toggleMode} />
            <label htmlFor='darkmode-toggle'>
                <BsFillMoonFill />
                <BsFillSunFill />
            </label>
        </Wrapper>
    );
};

export default DarkModeToggle;
