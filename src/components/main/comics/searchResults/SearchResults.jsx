import ErrorMessage from '../../common/errorMessage/ErrorMessage'
import SearchBar from '../../common/searchBar/SearchBar'
import CreateCovers from '../createCovers/CreateCovers'
import { useState } from 'react'

const SearchResults = ({ data, route }) => {

    const [search, setSearch] = useState('')
    const [result, setResult] = useState(data)
    const [inputError, setInputError] = useState(false)

    const handleChange = (event) => setSearch(event.target.value)

    const handleSubmit = (event) => {
        event.preventDefault()
        const reg = /^[A-Za-z0-9-\s]+$/
        if (reg.test(search) || search == '') {
            setInputError(false)
            setResult(data.filter(issue => issue.name.toLowerCase().includes(search.toLowerCase())))
        } else setInputError(true)
    }

    const clear = () => {
        setSearch('')
        setInputError(false)
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='comic--form'>
                <SearchBar 
                    handleChange={handleChange} 
                    search={search} 
                    placeholder='Search by issue title'
                    clear={clear}
                /> 
            </form>
            { inputError
                ? <ErrorMessage errorType='inputError' />
                : result.length == 0 
                ? <ErrorMessage errorType='noMatch' />
                : <div className='covers'>
                    <CreateCovers data={result} route={route} isVolumeCover={false} />
                </div>
            }
        </>
    )
}

export default SearchResults;