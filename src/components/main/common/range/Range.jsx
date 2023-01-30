const Range = ({ id, min, max, step, value, handleChange, text, state }) => {
    return (
        <>
            <input
                type='range'
                id={id}
                name={id}
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={handleChange}
            />
            <label htmlFor={id}>{text} {state}</label>
        </>
    )
}

export default Range;