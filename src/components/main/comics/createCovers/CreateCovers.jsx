import Pagination from '../../common/pagination/Pagination'
import { Link } from 'react-router-dom'
import Issue from '../issue/Issue'
import { useState } from 'react'
import Book from '../book/Book'

const CreateCovers = ({ data, isVolumeCover }) => {

    const [currentPage, setCurrentPage] = useState(1)
    const postPerPage = 12
    const lastPostIndex = currentPage * postPerPage
    const firstPostIndex = lastPostIndex - postPerPage
    const currentPosts = data.slice(firstPostIndex, lastPostIndex)

    const covers = currentPosts.map((item, index) => {
        if(isVolumeCover) {
            const volumeID = (item.api_detail_url.split('-'))[1]
            return (
                <Link to={`/comics/vol_${volumeID}`} key={index}>
                    <Book 
                        volumeTitle={`${item.name}`} 
                        coverImage={`${item.image.small_url}`}
                        isMain={false} 
                    />
                </Link>
            )
        } else {
            return (
                <Issue key={index} api={item.api_detail_url}/>
            )
        }
    })

    const mobileVolumeWidth = currentPosts.length * 88
    const mobileIssueWidth = currentPosts.length * 84
 
    return (
        <div className='cover--table'>    
            <Pagination 
                totalPosts={data.length} 
                postPerPage={postPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
            <div className='slider'>
                <div 
                    className='posters' 
                    style={window.innerHeight > window.innerWidth
                    ? {width: isVolumeCover 
                        ? `${mobileVolumeWidth}%` 
                        : `${mobileIssueWidth}%`}
                    : null}>
                    {covers}
                </div>
            </div>
        </div>
    )
}

export default CreateCovers;