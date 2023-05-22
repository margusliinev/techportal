const FormRow = ({ type, name, value, handleChange, handleValidation, labelText }) => {
    return (
        <div className='form-row'>
            <label htmlFor={name} className='form-label'>
                {labelText || name}
            </label>
            <input type={type} value={value} name={name} onChange={handleChange} onFocus={handleValidation} className='form-input' />
            <p className='form-alert'></p>
        </div>
    );
};

export default FormRow;
