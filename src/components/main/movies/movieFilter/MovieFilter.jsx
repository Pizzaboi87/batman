import RadioButton from '../../common/radioButton/RadioButton'
import DropDown from '../../common/dropDown/DropDown'
import Range from '../../common/range/Range'

const MovieFilter = ({ formData, options, minValue, maxValue, handleChange, handleMinChange, handleMaxChange }) => {
    return (
        <>
            <div className='filter'>
                <fieldset className='radio'>
                    <legend>Choose type</legend>
                    <RadioButton
                        id='All'
                        name='type'
                        value=''
                        state={formData.type}
                        handleChange={handleChange}
                        htmlFor='movie'
                    />
                    <br />
                    <RadioButton
                        id='Movie'
                        name='type'
                        value='movie'
                        state={formData.type}
                        handleChange={handleChange}
                        htmlFor='movie'
                    />
                    <br />
                    <RadioButton
                        id='Series'
                        name='type'
                        value='series'
                        state={formData.type}
                        handleChange={handleChange}
                        htmlFor='movie'
                    />
                </fieldset>

                <fieldset className='range movie--imdb'>
                    <legend>IMDb rating</legend>
                    <Range 
                        id='imdb_min'
                        min={1}
                        max={10}
                        step={0.1}
                        value={minValue}
                        handleChange={handleMinChange}
                        text='Min: '
                        state={formData.imdb_min}
                    />
                    <Range 
                        id='imdb_max'
                        min={1}
                        max={10}
                        step={0.1}
                        value={maxValue}
                        handleChange={handleMaxChange}
                        text='Max: '
                        state={formData.imdb_max}
                    />
                </fieldset>
                    
                <fieldset className='dropdown'>
                    <legend>Choose year</legend>
                    <DropDown 
                        id='year_min'
                        handleChange={handleChange}
                        value={formData.year_min}
                        options={options}
                        text='From: '
                    />
                    <br />
                    <DropDown 
                        id='year_max'
                        handleChange={handleChange}
                        value={formData.year_max}
                        options={options}
                        text='To: '
                    />
                </fieldset>
            </div>
        </>
    )
}

export default MovieFilter;