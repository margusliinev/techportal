import { Logo, NavLinks, UserButton } from '../components';
import { CgClose } from 'react-icons/cg';
import Wrapper from '../assets/styled_components/MobileSidebar';
import { useAppSelector, useAppDispatch } from '../hooks';
import { toggleNavigation } from '../features/navigation/navigationSlice';

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
