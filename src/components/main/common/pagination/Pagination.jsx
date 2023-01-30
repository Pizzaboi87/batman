import { useEffect, useState } from 'react'
import { useRef } from 'react'
import './pagination.css'

const Pagination = ({totalPosts, postPerPage, setCurrentPage, currentPage}) => {

    const goButton = useRef(null)
    const [pageExist, setPageExist] = useState(true)
    const [whichPage, setWhichPage] = useState(1)

    useEffect(() => {
        setCurrentPage(1)
    }, [totalPosts])

    const maxPages = Math.ceil(totalPosts/postPerPage)
    let pages = []
    for (let i = 1; i <= maxPages; i++) {
        pages.push(i)
    }

    const buttons = pages.map((page, index) => {
        return (
            <button 
                key={index} 
                onClick={() => choosePage(page)}
                className={page == currentPage ? 'comicButton button--active' : 'comicButton button--normal'}
                
            >
                {page}
            </button>
        )
    })

    const [breathForFetch, setBreathForFetch] = useState(false)
    const pageButtons = document.getElementsByTagName('button')
    for (const button of pageButtons) {
        button.disabled = breathForFetch
        button.style.cursor = breathForFetch ? 'wait' : 'pointer'
    }

    const choosePage = (which) => {
        setBreathForFetch(true)
        setCurrentPage(which)
        setTimeout(() => {
            setBreathForFetch(false)
        }, 2000)
    }

    const first = buttons.filter(button => button.key == 0 && button.key != (maxPages - 1))
    const actual = buttons.find(button => button.key > currentPage - 2 && button.key != 0 && button.key != (maxPages - 1))
    const last = buttons.filter(button => button.key == (maxPages - 1))
    const beforeLast = buttons.filter(button => button.key == (maxPages - 2) && currentPage == maxPages && button.key != 0)

    const pageUp = () => {
        if(currentPage < maxPages) {
            choosePage(prevPage => prevPage + 1)
        }
    }

    const pageDown = () => {
        if(currentPage > 1) {
            choosePage(prevPage => prevPage - 1)
        }
    }

    const handleChange = (event) => setWhichPage(event.target.value)

    const goToPage = (event) => {
        event.preventDefault()
        if(whichPage <= maxPages && whichPage >= 1) {
            setPageExist(true)
            choosePage(whichPage)
        } else {
            goButton.current.style.cursor = 'not-allowed'
            setPageExist(false)
        }
    }

    return (
        <div className='pagination'>
            <fieldset className='selectPage'>
                <legend>Select Page</legend>
                <button className='comicButton button--arrow' onClick={pageDown}>&#x3C;</button>
                {first}
                {actual}
                {beforeLast}
                {last}
                <button className='comicButton button--arrow' onClick={pageUp}>&#x3E;</button>
                {!pageExist && <h3 className='notExist'>The selected page not exist!</h3>}
            </fieldset>
            <fieldset className='goToPage'>
                <legend>Go to Page</legend>
                <input type='number' className='pageInput' onChange={handleChange} />
                <button className='comicButton button--arrow' ref={goButton} onClick={goToPage}>GO</button>
            </fieldset>
        </div>
    )
}

export default Pagination;