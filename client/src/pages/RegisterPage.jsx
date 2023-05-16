import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Logo, FormRow, Alert } from '../components';

const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
    showAlert: false,
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
                    {values.showAlert ? <Alert /> : null}
                    <h4 className='form-title'>Login</h4>
                    <FormRow type={'text'} name={'name'} value={values.name} handleChange={handleChange} labelText={'name'} />
                    <FormRow type={'email'} name={'email'} value={values.email} handleChange={handleChange} labelText={'email'} />
                    <FormRow type={'password'} name={'password'} value={values.password} handleChange={handleChange} labelText={'password'} />
                    <button type='submit' className='btn form-btn'>
                        Submit
                    </button>
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
        margin-top: -3rem;
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

    /* p {
        margin: 0;
        margin-top: 1rem;
        text-align: center;
    } */
    /* .member-btn {
        background: transparent;
        border: transparent;
        color: var(--colorPrimary5);
        cursor: pointer;
        letter-spacing: var(--spacingWide);
    } */
`;

export default RegisterPage;
