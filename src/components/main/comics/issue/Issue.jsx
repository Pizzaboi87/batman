import useGetData from '../../common/useGetData/useGetData'
import Loading from '../../common/loading/Loading'
import IssueError from '../issueError/IssueError'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import './issue.css'

const Issue = ({ api }) => {

    const front = useRef(null)
    const back = useRef(null)

    const turnIssue = () => {
        front.current.classList.toggle('frontTurn')
        back.current.classList.toggle('backTurn')
    }

    const newLink = api.replace('https://comicvine.gamespot.com/api', 'https://batserver.cyclic.app/comicvine')
    const url = newLink.concat('field_list=person_credits,image,description,volume')

    const {data, isLoading, error} = useGetData(url)
    if(error) return <IssueError error={error} />
    if(isLoading) return <Loading img={2} />
    
    const volumeID = (data.results.volume.api_detail_url.split('-'))[1]

    const list = data.results.person_credits.map((item, index) => {
        return (
            <li key={index}>{item.role}: {item.name}</li>
        )
    })

    return (
        <div className='issue' onClick={turnIssue}>
            <div className='front' ref={front}style={{backgroundImage: `url(${data.results.image.small_url})`}}></div>
	        <div className='back' ref={back}>
                <div className='issue--info' dangerouslySetInnerHTML={{__html: data.results.description}}></div>
                <ul>
                    {list}
                </ul>
                <Link to={`/comics/vol_${volumeID}`}>
                    <button className='issue--link'>
                        Check the full Volume!
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Issue;