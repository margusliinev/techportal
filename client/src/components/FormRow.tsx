interface Props {
    type: string;
    name: string;
    value: string;
    labelText: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleValidation?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const FormRow = ({ type, name, value, labelText, handleChange, handleValidation }: Props) => {
    return (
        <div className='form-row'>
            <label htmlFor={name} className='form-label'>
                {labelText || name}
            </label>
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
    );
};

export default FormRow;
