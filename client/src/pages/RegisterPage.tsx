import { useRef, useState } from 'react';

import { FormRow, FormRowPassword, Logo, MemberCheck } from '../components';
import { useRegisterMutation } from '../features/api/apiSlice';
import Wrapper from '../styles/styled_components/pages/RegisterPage';
import { CustomAPIError, UserRegister } from '../types';
import { handleValidation, validateEmail, validatePassword, validateUsername } from '../utils/registerValidation';

const initialState: UserRegister = {
    username: '',
    email: '',
    password: '',
};

const RegisterPage = () => {
    const [values, setValues] = useState<UserRegister>(initialState);
    const [register, { isLoading, isError, error, isSuccess }] = useRegisterMutation();
    const errorRef = useRef<HTMLParagraphElement>(null);

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
            register({ username, email, password }).catch(() => {
                return;
            });
        } else if (!username || !email || !password) {
            if (errorRef.current) {
                errorRef.current.textContent = 'Missing username, email or password';
            }
        }
    };

    return (
        <Wrapper>
            <div className='container'>
                <form className='form' onSubmit={handleSubmit} noValidate>
                    <div className='form-logo'>
                        <Logo />
                    </div>
                    <p ref={errorRef} className={isSuccess ? 'server-message server-message-success' : 'server-message server-message-error'}>
                        {isError ? (error as CustomAPIError).data.msg : isSuccess && 'Please check your email to verify your account'}
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
                    <button type='submit' className={isLoading ? 'btn form-btn form-btn-disabled' : 'btn form-btn'} disabled={isLoading}>
                        Create new account
                    </button>
                    <MemberCheck message={'Already have an account?'} endpoint={'login'} />
                </form>
            </div>
        </Wrapper>
    );
};

export default RegisterPage;
