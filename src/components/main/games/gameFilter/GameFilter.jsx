import DropDown from '../../common/dropDown/DropDown'

const GameFilter = ({ formData, options, handleChange, handleDeveloper, handlePublisher}) => {
    return (
        <>
            <div className='filter gamefilter'>
                <fieldset className='dropdown gameyear'>
                    <legend>Choose year</legend>
                    <DropDown 
                        id='year_min'
                        handleChange={handleChange}
                        value={formData.year_min}
                        options={options.allYears}
                        text='From: '
                    />
                    <br />
                    <DropDown 
                        id='year_max'
                        handleChange={handleChange}
                        value={formData.year_max}
                        options={options.allYears}
                        text='To: '
                    />
                </fieldset>

                <fieldset className='dropdown devpub'>
                    <legend>Choose company</legend>
                    <DropDown 
                        id='publisher'
                        handleChange={handlePublisher}
                        value={formData.publisher}
                        options={options.publishers}
                        text='Publisher: '
                    />
                    <br />
                    <DropDown 
                        id='developer'
                        handleChange={handleDeveloper}
                        value={formData.developer}
                        options={options.developers}
                        text='Developer: '
                    />
                </fieldset>

                <fieldset className='dropdown platform'>
                    <legend>Choose Platform</legend>
                    <DropDown 
                        id='platform'
                        handleChange={handleChange}
                        value={formData.platform}
                        options={options.platforms}
                        text='Platform: '
                    />
                    {formData.platform && 
                    <img 
                        src={`https://peterweiser.com/logo/${formData.platform.replaceAll(' ', '_').toLowerCase()}.webp`} 
                        alt='logo' 
                    />}
                </fieldset>
            </div>
        </>
    )
}

export default GameFilter;