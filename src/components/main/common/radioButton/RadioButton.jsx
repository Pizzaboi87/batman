const RadioButton = ({ id, name, value, state, handleChange, htmlFor }) => {
    return (
        <>
            <input
                type='radio'
                id={id}
                name={name}
                value={value}
                checked={state === value}
                onChange={handleChange}
            />
            <label htmlFor={htmlFor}>{id}</label>
        </>
    )
}

export default RadioButton;