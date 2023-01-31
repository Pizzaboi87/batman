import ErrorMessage from '../../common/errorMessage/ErrorMessage'
import Pagination from '../../common/pagination/Pagination'
import SearchBar from '../../common/searchBar/SearchBar'
import GameFolder from '../gameFolder/GameFolder'
import GameFilter from '../gameFilter/GameFilter'
import { useEffect, useState } from 'react'
import '../../common/filter/filter.css'

const HandleGameData = ({ gameData }) => {

    const [inputError, setInputError] = useState(false)

    const years = []
    const [options, setOptions] = useState({
        allYears: [],
        developers: [],
        publishers: [],
        platforms: []
    })

    const allPlatforms = []
    gameData.forEach(item => {
        item.logo1_title.length > 0 ? allPlatforms.push(item.logo1_title) : null
        item.logo2_title.length > 0 ? allPlatforms.push(item.logo2_title) : null
        item.logo3_title.length > 0 ? allPlatforms.push(item.logo3_title) : null
        item.logo4_title.length > 0 ? allPlatforms.push(item.logo4_title) : null
        item.logo5_title.length > 0 ? allPlatforms.push(item.logo5_title) : null
        item.logo6_title.length > 0 ? allPlatforms.push(item.logo6_title) : null
    })
    const uniquePlatforms = allPlatforms.filter((value, index, item) => item.indexOf(value) === index)
    
    const allPublisher = []
    gameData.forEach(item => allPublisher.push(item.publisher))
    const uniquePublishers = allPublisher.filter((value, index, item) => item.indexOf(value) === index)
    
    const allDeveloper = []
    gameData.forEach(item => allDeveloper.push(item.developer))
    const uniqueDevelopers = allDeveloper.filter((value, index, item) => item.indexOf(value) === index)
    
    gameData.forEach(item => years.push(item.releaseDate))
    const min_year = Math.min(...years)
    const max_year = Math.max(...years)
    const allYears = []
    for (let i = min_year; i <= max_year; i++){
        allYears.push(i)
    }

    useEffect(() => {
        setOptions({
            allYears: allYears,
            developers: uniqueDevelopers.sort(),
            publishers: uniquePublishers.sort(),
            platforms: uniquePlatforms.sort()
        })
    }, [])

    const [filteredGames, setFilteredGames] = useState(gameData)
    const [formData, setFormData] = useState(
        {
            search: '',
            year_min: min_year,
            year_max: max_year,
            publisher: '',
            developer: '',
            platform: ''
        }
    )

    const handleDeveloper = (event) => {
        const {value} = event.target
        const filteredPublisher = []
        const publisherWorkWith = gameData.filter(item => item.developer.includes(value))
        publisherWorkWith.forEach(item => filteredPublisher.push(item.publisher))
        const newUniquePublishers = filteredPublisher.filter((value, index, item) => item.indexOf(value) === index)
        setOptions(prevOptions => {
            return {
                ...prevOptions,
                publishers: newUniquePublishers.sort()
            }
        })
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                developer: value
            }
        })
    }

    const handlePublisher = (event) => {
        const {value} = event.target
        const filteredDeveloper = []
        const developerWorkWith = gameData.filter(item => item.publisher.includes(value))
        developerWorkWith.forEach(item => filteredDeveloper.push(item.developer))
        const newUniqueDevelopers = filteredDeveloper.filter((value, index, item) => item.indexOf(value) === index)
        setOptions(prevOptions => {
            return {
                ...prevOptions,
                developers: newUniqueDevelopers.sort()
            }
        })
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                publisher: value
            }
        })
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
            setFilteredGames(gameData.filter(game =>
                game.platform.toLowerCase().includes(formData.platform.replaceAll(' ', '_').toLowerCase()) &&
                game.publisher.toLowerCase().includes(formData.publisher.toLowerCase()) &&
                game.developer.toLowerCase().includes(formData.developer.toLowerCase()) &&
                game.releaseDate >= (Number(formData.year_min)) &&
                game.releaseDate <= (Number(formData.year_max)) &&
                game.title.toLowerCase().includes(formData.search.toLowerCase()
            )))
        } else setInputError(true)
    }

    const [currentPage, setCurrentPage] = useState(1)
    const postPerPage = 12
    const lastPostIndex = currentPage * postPerPage
    const firstPostIndex = lastPostIndex - postPerPage
    const currentPosts = filteredGames.slice(firstPostIndex, lastPostIndex)

    const games = currentPosts.map((game, index) => {
        return (
            <GameFolder 
                key={index}
                game={game}
            />
        )
    })

    const clear = () => {
        setFormData({
            search: '',
            year_min: min_year,
            year_max: max_year,
            publisher: '',
            developer: '',
            platform: ''
        })
        setInputError(false)
    }
    
    const mobileWidth = currentPosts.length * 160

    return (
        <>
            <form className='filter--form' onSubmit={handleSubmit}>
                <SearchBar 
                    handleChange={handleChange}
                    search={formData.search}
                    placeholder='Search by game title'
                    clear={clear}
                /> 
                <GameFilter
                    formData={formData}
                    options={options}
                    handleChange={handleChange}
                    handleDeveloper={handleDeveloper}
                    handlePublisher={handlePublisher}
                />            
            </form>
            <Pagination 
                totalPosts={filteredGames.length} 
                postPerPage={postPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
            { inputError
                ? <ErrorMessage errorType='inputError' />
                : filteredGames.length == 0
                ? <ErrorMessage errorType='noMatch' />
                : <div className={window.innerHeight > window.innerWidth ? 'slider folders' : 'game--container'}>
                    <div className='posters' style={window.innerHeight > window.innerWidth ? {width: `${mobileWidth}vw`} : null}>
                        {games}
                    </div>
                </div>
            }
        </>
    )
}

export default HandleGameData;