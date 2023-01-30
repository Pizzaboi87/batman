import ErrorMessage from '../../common/errorMessage/ErrorMessage'
import Pagination from '../../common/pagination/Pagination'
import SearchBar from '../../common/searchBar/SearchBar'
import MovieFilter from '../movieFilter/MovieFilter'
import '../../common/filter/filter.css'
import { useState } from 'react'

const Posters = ({ data }) => {

    const [inputError, setInputError] = useState(false)

    const years = []
    const allYears = []
    
    data.data.forEach(item => years.push(Number(item.shown.split('-', 1))))
    const min_year = Math.min(...years)
    const max_year = Math.max(...years)

    for (let i = min_year; i <= max_year; i++){
        allYears.push(i)
    }

    const [filteredMovies, setFilteredMovies] = useState(data.data)
    const [formData, setFormData] = useState(
        {
            type: '',
            imdb_min: 1,
            imdb_max: 10,
            year_min: min_year,
            year_max: max_year,
            search: ''
        }
    )

    const [minValue, setMinValue] = useState(1)
    const [maxValue, setMaxValue] = useState(10)

    const handleMinChange = (event) => {
        const newMinVal = Math.min(event.target.value, maxValue - 0.1)
        setMinValue(newMinVal)
        if(event.target.value < maxValue) handleChange(event)
    }

    const handleMaxChange = (event) => {
        const newMaxVal = Math.max(event.target.value, minValue + 0.1)
        setMaxValue(newMaxVal)
        if(event.target.value > minValue) handleChange(event)
    }

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const reg = /^[A-Za-z0-9-\s]+$/
        if (reg.test(formData.search) || formData.search == '') {
            setInputError(false)
            setFilteredMovies(data.data.filter(movie =>
                movie.title.toLowerCase().includes(formData.search.toLowerCase()) &&
                movie.imdbRating > formData.imdb_min && 
                movie.imdbRating < formData.imdb_max && 
                movie.filmType.includes(formData.type) &&
                movie.shown.split('-', 1) >= formData.year_min &&
                movie.shown.split('-', 1) <= formData.year_max
            ))
        } else setInputError(true)
    }

    const [currentPage, setCurrentPage] = useState(1)
    const postPerPage = 12
    const lastPostIndex = currentPage * postPerPage
    const firstPostIndex = lastPostIndex - postPerPage
    const currentPosts = filteredMovies.slice(firstPostIndex, lastPostIndex)

    const posters = currentPosts.map((item, index) => {
        const director = item.director.replaceAll(',', ', ')
        const actors = item.actors.replaceAll(',', ', ')
        return (
            <div className='poster--card' key={index}>
                <div className='poster'>
                    <img src={item.poster} alt='poster'/>
                    <div className='poster--data'>
                        <h1>{item.title}</h1>
                        <span className='poster--details'>
                            <span>
                                <h2>Shown:</h2>
                                <h3>{item.shown}</h3>
                            </span>
                            <span>
                                <h2>Runtime:</h2>
                                <h3>{item.runtime} min</h3>
                            </span>
                            <a href={`https://www.imdb.com/title/${item.imdbID}/`} target='_blank' rel='noreferrer'>    
                                <button className='imdbButton'>
                                    IMDb: {item.imdbRating}
                                </button>
                            </a>
                        </span>
                        <h2>Director:</h2> 
                        <h3>{director}</h3>
                        <h2>Starring:</h2>
                        <h3>{actors}</h3>
                        <p>{item.plot}</p>
                    </div>
                </div>
            </div>
        ) 
    })

    const clear = () => {
        setFormData({
            type: '',
            imdb_min: 1,
            imdb_max: 10,
            year_min: min_year,
            year_max: max_year,
            search: ''
        })
        setMinValue(1)
        setMaxValue(10)
        setInputError(false)
    }

    const mobileWidth = currentPosts.length * 90

    return (
        <>
            <form className='filter--form' onSubmit={handleSubmit}>
                <SearchBar 
                    handleChange={handleChange}
                    search={formData.search}
                    placeholder='Search by movie title'
                    clear={clear}
                /> 
                <MovieFilter 
                    formData={formData} 
                    options={allYears}
                    minValue={minValue}
                    maxValue={maxValue}
                    handleChange={handleChange}
                    handleMinChange={handleMinChange}
                    handleMaxChange={handleMaxChange}
                />
            </form>
            <Pagination 
                    totalPosts={filteredMovies.length} 
                    postPerPage={postPerPage}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                />
            <div className='slider'>
                <div className='posters' style={window.innerHeight > window.innerWidth ? {width: `${mobileWidth}%`} : null}>
                    { inputError
                        ? <ErrorMessage errorType='inputError' />
                        : filteredMovies.length == 0
                        ? <ErrorMessage errorType='noMatch' />
                        : posters
                    }
                </div>
            </div>
        </>  
    )
}

export default Posters;