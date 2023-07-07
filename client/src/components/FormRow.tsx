interface Props {
    type: string;
    name: string;
    value: string;
    labelText: string;
    required: boolean;
    disabled?: boolean;
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleValidation?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const FormRow = ({ type, name, value, labelText, required, disabled, handleChange, handleValidation }: Props) => {
    return (
        <div className='form-row'>
            <label htmlFor={name} className='form-label'>
                {labelText || name}
            </label>
            <input type={type} name={name} value={value} className='form-input' id={name} onChange={handleChange} onBlur={handleValidation} required={required} disabled={disabled} />
            <p className='form-alert'></p>
        </div>
    );
};

export default FormRow;
