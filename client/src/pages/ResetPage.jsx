import Wrapper from '../assets/Wrappers/Form';
import { useState } from 'react';
import { FormRow } from '../components';
import { Link } from 'react-router-dom';

const initialState = {
    email: '',
};

const ResetPage = () => {
    const [values, setValues] = useState(initialState);

    const handleChange = (e) => {
        console.log(e.target);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target);
    };

    return (
        <Wrapper>
            <div className='container'>
                <form className='form' onSubmit={handleSubmit}>
                    <h5 className='reset-title'>Reset your password</h5>
                    <p className='reset-description'>Enter the email address associated with your account and we'll send you a link to reset your password.</p>
                    <FormRow type={'email'} name={'email'} value={values.email} handleChange={handleChange} labelText={'email'} />
                    <button type='submit' className='btn form-btn'>
                        Continue
                    </button>
                    <div className='member-check'>
                        <Link to={'/login'} className='return-btn'>
                            Return to Login
                        </Link>
                    </div>
                </form>
            </div>
        </Wrapper>
    );
};

export default ResetPage;
