import { Logo, NavLinks } from '../components';
import Wrapper from '../styles/styled_components/components/DesktopSidebar';

const DesktopSidebar = () => {
    return (
        <Wrapper>
            <div className='sidebar-container'>
                <div className='content'>
                    <Logo />
                    <NavLinks />
                </div>
            </div>
        </Wrapper>
    );
};

export default DesktopSidebar;
