import useGetData from '../../common/useGetData/useGetData'
import CreateParts from '../createParts/CreateParts'
import Loading from '../../common/loading/Loading'
import NoPage from '../../../nopage/Nopage'

const ComicsBrowse = () => {

    const url = `https://batserver.cyclic.app/comicvine/volumes/1699/filter=name:batman&limit=1&field_list=aliases`
    const address = '/comics/browsing/box_'
    const {data, isLoading, error} = useGetData(url)
    if(error) return <NoPage error={error} />
    if(isLoading) return <Loading img={2} />

    return (
        <>
            <h1 className='title'>Comics Database</h1>
            <CreateParts address={address} total={data.number_of_total_results} order={'Volumes: '}/>
        </>
    )
}

export default ComicsBrowse;