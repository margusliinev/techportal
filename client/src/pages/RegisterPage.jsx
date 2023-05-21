import Wrapper from '../assets/Wrappers/Form';
import { useState } from 'react';
import { Logo, FormRow } from '../components';
import { Link } from 'react-router-dom';

const initialState = {
    name: '',
    email: '',
    password: '',
};

const RegisterPage = () => {
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
                    <div className='form-logo'>
                        <Logo />
                    </div>
                    <FormRow type={'text'} name={'name'} value={values.name} handleChange={handleChange} labelText={'name'} />
                    <FormRow type={'email'} name={'email'} value={values.email} handleChange={handleChange} labelText={'email'} />
                    <FormRow type={'password'} name={'password'} value={values.password} handleChange={handleChange} labelText={'password'} />
                    <button type='submit' className='btn form-btn'>
                        Create new account
                    </button>
                    <div className='member-check'>
                        <p>Already a member?</p>
                        <Link to={'/login'} type='button' className='member-btn'>
                            Login
                        </Link>
                    </div>
                </form>
            </div>
        </Wrapper>
    );
};

export default RegisterPage;
