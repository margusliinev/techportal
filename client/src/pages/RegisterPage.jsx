import styled from 'styled-components';
import { useState } from 'react';
import { Logo, FormRow } from '../components';

const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: false,
};

const RegisterPage = () => {
    const [values, setValues] = useState(initialState);

    const toggleMember = () => {
        setValues({ ...values, isMember: !values.isMember });
    };

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
                    {!values.isMember && <FormRow type={'text'} name={'name'} value={values.name} handleChange={handleChange} labelText={'name'} />}
                    <FormRow type={'email'} name={'email'} value={values.email} handleChange={handleChange} labelText={'email'} />
                    {values.isMember ? (
                        <div className='form-row'>
                            <div className='form-label-flex'>
                                <label htmlFor='password' className='form-label'>
                                    password
                                </label>
                                <a href='#' className='form-forgot-password'>
                                    Forgot password?
                                </a>
                            </div>
                            <input type='password' value={values.password} name='password' onChange={handleChange} className='form-input' />
                            <p className='form-alert'></p>
                        </div>
                    ) : (
                        <FormRow type={'password'} name={'password'} value={values.password} handleChange={handleChange} labelText={'password'} />
                    )}
                    <button type='submit' className='btn form-btn'>
                        {values.isMember ? 'Sign In' : 'Create new account'}
                    </button>
                    <div className='member-check'>
                        {values.isMember ? <p>Not a member yet?</p> : <p>Already a member?</p>}
                        <button type='button' onClick={toggleMember} className='member-btn'>
                            {values.isMember ? 'Register' : 'Login'}
                        </button>
                    </div>
                </form>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    .container {
        min-height: 100vh;
        display: grid;
        place-items: center;
    }
    .form {
        border-top: 5px solid var(--colorPrimary5);
        box-shadow: 0 0 10px 5px rgb(0 0 0 / 0.1);
    }
    .form-logo {
        display: grid;
        place-items: center;
        margin-bottom: 1.5rem;
    }
    .form-btn {
        margin-top: 2rem;
    }
    .member-check {
        margin-top: 1rem;
        text-align: center;
        p {
            display: inline;
        }
        p:nth-of-type(1) {
            margin-right: 0.5rem;
        }
    }
    .member-btn {
        background: transparent;
        border: none;
        color: var(--colorPrimary5);
        cursor: pointer;
        font-size: 1rem;
    }
`;

export default RegisterPage;
