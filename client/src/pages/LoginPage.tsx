import Wrapper from '../assets/Wrappers/Form';
import { useState } from 'react';
import { Logo, FormRow } from '../components';
import { Link } from 'react-router-dom';

interface values {
    email: string;
    password: string;
}

const initialState: values = {
    email: '',
    password: '',
};

const LoginPage = () => {
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
                    <div className='form-logo'>
                        <Logo />
                    </div>
                    <FormRow type={'email'} name={'email'} value={values.email} handleChange={handleChange} labelText={'email'} />
                    <div className='form-row'>
                        <div className='form-label-flex'>
                            <label htmlFor='password' className='form-label'>
                                password
                            </label>
                            <Link to={'/reset'} className='form-forgot-password'>
                                Forgot password?
                            </Link>
                        </div>
                        <input type='password' value={values.password} name='password' onChange={handleChange} className='form-input' id='password' />
                        <p className='form-alert'></p>
                    </div>
                    <button type='submit' className='btn form-btn'>
                        Sign In
                    </button>
                    <div className='member-check'>
                        <p>Don't have an account?</p>
                        <Link to={'/register'} className='member-btn'>
                            Register
                        </Link>
                    </div>
                </form>
            </div>
        </Wrapper>
    );
};

export default LoginPage;
