import './searchBar.css'

const SearchBar = ({ handleChange, search, placeholder, clear }) => {
    return (
        <div className='searchBar'>
            <input 
                type='search'
                id='search'
                name='search'
                placeholder={placeholder}
                value={search}
                onChange={handleChange}
            />
            <input
                type='submit'
                id='submit'
                value='Press to Search / Filter'
            />
            <button 
                className='clearButton'
                onClick={clear}
            >
                Clear
            </button>
        </div>
    )
}

export default SearchBar;