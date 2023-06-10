import { useState, useRef } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { LogoBig, FormRow, FormRowPassword, MemberCheck } from '../components';
import { handleValidation, validateUsername, validateEmail, validatePassword } from '../utils/formValidation';
import { register } from '../utils/dataFetching';
import { UserRegister, CustomAPIError } from '../types';
import Wrapper from '../assets/Wrappers/RegisterLoginResetPage';

const initialState: UserRegister = {
    username: '',
    email: '',
    password: '',
};

const RegisterPage = () => {
    const [values, setValues] = useState<UserRegister>(initialState);
    const { mutate, isLoading, isError, error, isSuccess } = useMutation(register);
    const errorRef = useRef<HTMLParagraphElement | null>(null);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const nextElementSibling = e.currentTarget.nextElementSibling as HTMLElement;
        if (errorRef.current) {
            errorRef.current.textContent = '';
        }
        e.currentTarget.classList.remove('form-input-error');
        nextElementSibling.textContent = '';
        setValues({ ...values, [e.target.name]: e.target.value.trim() });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { username, email, password } = values;
        if (validateUsername(username) && validateEmail(email) && validatePassword(password)) {
            mutate({ username, email, password });
        }
    };

    if (isSuccess) {
        setTimeout(() => {
            navigate('/login');
        }, 2000);
    }

    return (
        <Wrapper>
            <div className='container'>
                <form className='form' onSubmit={handleSubmit}>
                    <div className='form-logo'>
                        <LogoBig />
                    </div>
                    <p ref={errorRef} className={isSuccess ? 'server-message server-message-success' : 'server-message server-message-error'}>
                        {isError ? (error as CustomAPIError).response.data.msg : isSuccess && 'Your account has been created'}
                    </p>
                    <FormRow
                        type={'text'}
                        name={'username'}
                        value={values.username}
                        labelText={'username'}
                        handleChange={handleChange}
                        handleValidation={(e) => handleValidation(e, values.username, values.email, values.password)}
                    />
                    <FormRow
                        type={'email'}
                        name={'email'}
                        value={values.email}
                        labelText={'email'}
                        handleChange={handleChange}
                        handleValidation={(e) => handleValidation(e, values.username, values.email, values.password)}
                    />
                    <FormRowPassword
                        type={'password'}
                        name={'password'}
                        value={values.password}
                        labelText={'password'}
                        forgot={false}
                        handleChange={handleChange}
                        handleValidation={(e) => handleValidation(e, values.username, values.email, values.password)}
                    />
                    <button type='submit' className={isLoading || isSuccess ? 'btn form-btn form-btn-disabled' : 'btn form-btn'} disabled={isLoading || isSuccess}>
                        {isSuccess ? 'Redirecting...' : 'Create new account'}
                    </button>
                    <MemberCheck message={'Already have an account?'} endpoint={'login'} />
                </form>
            </div>
        </Wrapper>
    );
};

export default RegisterPage;
