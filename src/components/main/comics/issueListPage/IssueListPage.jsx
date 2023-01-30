import useGetData from '../../common/useGetData/useGetData'
import CreateParts from '../createParts/CreateParts'
import Loading from '../../common/loading/Loading'
import IssuePage from '../issuePage/IssuePage'
import { useParams } from 'react-router-dom'
import NoPage from '../../../nopage/Nopage'

const IssueListPage = () => {

    const route = useParams()
    const url = `https://batserver.cyclic.app/comicvine/volume/4050-${route.volumeID}/field_list=count_of_issues,name`
    const address = ``

    const {data, isLoading, error} = useGetData(url)
    if(error) return <NoPage error={error} />
    if(isLoading) return <Loading img={2} />

    if(data.results.count_of_issues > 100) {
        return (
            <CreateParts address={address} total={data.results.count_of_issues} order={'Issues:'} title={data.results.name}/>
        )
    }

    else return (
        <IssuePage title={data.results.name}/>
    )
}

export default IssueListPage;