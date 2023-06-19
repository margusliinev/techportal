import Wrapper from '../assets/styled_components/components/DesktopSidebar';
import { Logo, NavLinks } from '../components';

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
