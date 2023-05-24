interface Props {
    type: string;
    name: string;
    value: string;
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleValidation?: (e: React.FocusEvent<HTMLInputElement>) => void;
    labelText: string;
}

const FormRow = ({ type, name, value, handleChange, handleValidation, labelText }: Props) => {
    return (
        <div className='form-row'>
            <label htmlFor={name} className='form-label'>
                {labelText || name}
            </label>
            <input required type={type} name={name} value={value} onChange={handleChange} onBlur={handleValidation} className='form-input' id={name} />
            <p className='form-alert'></p>
        </div>
    );
};

export default FormRow;
