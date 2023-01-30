import useGetData from '../../common/useGetData/useGetData'
import SearchResults from '../searchResults/SearchResults'
import Loading from '../../common/loading/Loading'
import { useParams } from 'react-router-dom'
import NoPage from '../../../nopage/Nopage'
import './comicsSearch.css'

const ComicsSearch = () => {

    const route = useParams()
    const url = 'https://batserver.cyclic.app/comicvine/character/4005-1699/field_list=issue_credits'

    const {data, isLoading, error} = useGetData(url)
    if(error) return <NoPage error={error} />
    if(isLoading) return <Loading img={2} />
    
    const issues = data.results.issue_credits
    const issuesWithTitle = []

    issues.forEach(element => {
        if(element.name !== null){
            issuesWithTitle.push(element)
        }
    })

    return (
        <>
            <h1 className='title'>Search Comics</h1>
            <SearchResults data={issuesWithTitle} route={route} />
        </>
    )
}

export default ComicsSearch;