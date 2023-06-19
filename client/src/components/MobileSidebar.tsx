import { CgClose } from 'react-icons/cg';

import Wrapper from '../assets/styled_components/components/MobileSidebar';
import { Logo, NavLinks, UserButton } from '../components';
import { toggleNavigation } from '../features/navigation/navigationSlice';
import { useAppDispatch,useAppSelector } from '../hooks';

const MobileSidebar = () => {
    const { showSidebar } = useAppSelector((store) => store.navigation);
    const dispatch = useAppDispatch();

    return (
        <Wrapper>
            <div className={showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container hide-sidebar'}></div>
            <div className={showSidebar ? 'content show-content' : 'content hide-content'}>
                <button type='button' className='close-btn' onClick={() => dispatch(toggleNavigation())}>
                    <CgClose />
                </button>
                <Logo />
                <NavLinks />
                <UserButton />
            </div>
        </Wrapper>
    );
};

export default MobileSidebar;
