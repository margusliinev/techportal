import { FaUserCircle } from 'react-icons/fa';
import Wrapper from '../assets/Wrappers/Navbar';

const Navbar = () => {
    return (
        <Wrapper>
            <div className='nav-center'>
                <div>
                    <h3 className='logo-text'>dashboard</h3>
                </div>
                <div className='btn-container'>
                    <button className='btn'>
                        <FaUserCircle />
                        Margus
                    </button>
                    <div className='dropdown show-dropdown'>
                        <button className='dropdown-btn'>logout</button>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};
export default Navbar;
