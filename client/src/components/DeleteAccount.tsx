import { deleteUser, logoutUser, setUser } from '../features/user/userSlice';
import { useAppDispatch } from '../hooks';
import Wrapper from '../styles/styled_components/components/DeleteAccount';
import { CustomAPIError } from '../types';

const DeleteAccount = () => {
    const dispatch = useAppDispatch();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        dispatch(deleteUser())
            .then(() => {
                dispatch(setUser(null));
            })
            .catch(async (error) => {
                if ((error as CustomAPIError).status === 401) {
                    await dispatch(logoutUser());
                    dispatch(setUser(null));
                }
            });
    };

    return (
        <Wrapper>
            <div className='delete-account'>
                <div className='delete-account-header'>
                    <h6>Delete account</h6>
                    <p>No longer want to use our service? You can delete your account here. This action is not reversible. All information related to this account will be deleted permanently.</p>
                </div>
                <form className='delete-account-form' onSubmit={handleSubmit}>
                    <button type='submit' className='btn'>
                        Yes, delete my account
                    </button>
                </form>
            </div>
        </Wrapper>
    );
};

export default DeleteAccount;
