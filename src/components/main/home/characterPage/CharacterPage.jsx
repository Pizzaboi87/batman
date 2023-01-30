import useGetData from '../../common/useGetData/useGetData'
import Loading from '../../common/loading/Loading'
import { useParams } from 'react-router-dom'
import NoPage from '../../../nopage/Nopage'
import './characterPage.css'

const CharacterPage = () => {

  const characterID = useParams()
  const url = `https://batserver.cyclic.app/comicvine/character/${characterID.id}/field_list=description,name`

  const {data, isLoading, error} = useGetData(url)
  if(error) return <NoPage error={error} />
  if(isLoading) return <Loading img={1} />

  const textWithCorrectLinks = data.results.description
    .replaceAll(/href="\//ig, 'href="https://comicvine.gamespot.com/')
    .replaceAll(/href="..\/..\//ig, 'href="https://comicvine.gamespot.com/')
    .replaceAll(/href/ig, 'target="_blank" href')
    .replaceAll(/style="width:/ig, '')
    .replaceAll('data-src', 'src')
  
  return (
    <>
      <h1 className='title'>{data.results.name}</h1>
      <div className='description' dangerouslySetInnerHTML={{__html: textWithCorrectLinks}}></div>
    </>
  )
}

export default CharacterPage;