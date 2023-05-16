import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Logo, FormRow, Alert } from '../components';

const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: false,
    showAlert: false,
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
                    {values.showAlert ? <Alert /> : null}
                    <h4 className='form-title'>{values.isMember ? 'Login' : 'Register'}</h4>
                    {!values.isMember && <FormRow type={'text'} name={'name'} value={values.name} handleChange={handleChange} labelText={'name'} />}
                    <FormRow type={'email'} name={'email'} value={values.email} handleChange={handleChange} labelText={'email'} />
                    <FormRow type={'password'} name={'password'} value={values.password} handleChange={handleChange} labelText={'password'} />
                    <button type='submit' className='btn form-btn'>
                        Submit
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
    }

    .form-logo {
        display: grid;
        place-items: center;
        margin-bottom: 1.5rem;
    }

    .form-title {
        text-align: center;
        margin-bottom: 0.5rem;
        font-weight: 500;
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
