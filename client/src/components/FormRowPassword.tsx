import { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

interface Props {
    type: string;
    name: string;
    value: string;
    labelText: string;
    required: boolean;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleValidation?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const FormRowPassword = ({ type, name, value, labelText, handleChange, handleValidation }: Props) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handlePasswordVisibility = (e: React.MouseEvent<HTMLButtonElement>) => {
        const nextElementSibling = e.currentTarget.nextElementSibling as HTMLInputElement;
        e.preventDefault();
        nextElementSibling.focus();
        if (showPassword) {
            nextElementSibling.type = 'password';
        } else {
            nextElementSibling.type = 'text';
        }
        setShowPassword(!showPassword);
    };

    return (
        <div className='form-row'>
            <label htmlFor={name} className='form-label'>
                {labelText || name}
            </label>
            <div className='form-input-password-container'>
                {value.length > 0 ? (
                    <button type='button' className='password-toggle' onMouseDown={handlePasswordVisibility}>
                        {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                    </button>
                ) : null}
                <input
                    type={type}
                    name={name}
                    value={value}
                    className='form-input'
                    id={name}
                    onChange={handleChange}
                    onBlur={handleValidation}
                    required
                />
                <p className='form-alert'></p>
            </div>
        </div>
    );
};

export default FormRowPassword;
