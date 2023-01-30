import xtype from 'xtypejs'

const DropDown = ({ id, handleChange, value, options, text }) => {
    return (
        <>
            <select
                id={id}
                name={id}
                onChange={handleChange}
                value={value}
            >
                {xtype(options[0]) !== 'positive_integer' && <option value=' '>Select an option</option>}
                {options.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select>
            <label htmlFor={id}>
                {text}{text == 'Platform: ' || text == 'Publisher: ' || text == 'Developer: ' ? <br /> : null}
                {value}
            </label>
        </>
    )
}

export default DropDown;