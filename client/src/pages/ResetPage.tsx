import Wrapper from '../assets/Wrappers/Form';
import { useState } from 'react';
import { FormRow } from '../components';
import { Link } from 'react-router-dom';

interface values {
    email: string;
}

const initialState: values = {
    email: '',
};

const ResetPage = () => {
    const [values, setValues] = useState<values>(initialState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(values);
    };

    return (
        <Wrapper>
            <div className='container'>
                <form className='form' onSubmit={handleSubmit} noValidate>
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
