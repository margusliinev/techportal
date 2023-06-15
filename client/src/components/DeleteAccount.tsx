import { useMutation } from '@tanstack/react-query';
import { deleteUser, logout } from '../utils/dataFetching';

const DeleteAccount = () => {
    // const { mutate } = useMutation(deleteUser, {
    //     onSuccess: () => {
    //         setUser(null);
    //     },
    //     onError: (error: AxiosError) => {
    //         if (error.response?.status === 401) {
    //             logout();
    //             setUser(null);
    //         }
    //     },
    // });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // mutate();
    };

    return (
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
    );
};

export default DeleteAccount;
