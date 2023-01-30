import volumeBackground from '../../../../assets/book_background.webp'
import { Link } from 'react-router-dom'
import Book from '../book/Book'

const CreateParts = ({ address, total, order, title }) => {
    
    const volumePerPage = 100
    let pages = []

    for (let i = 1; i <= Math.ceil(total/volumePerPage); i++) {
        pages.push(i)
    }
    
    const volumeParts = pages.map((page, index, pages) => {
        if(index + 1 === pages.length) {
            return (
                <Link to={`${address}${page}`} key={index}>
                    <Book 
                        volumeTitle={`${(page-1)*100} - ${total}`} 
                        coverImage={volumeBackground}
                        isMain={true}
                        order={order}
                    />
                </Link>
            )
        } else {
            return (
                <Link to={`${address}${page}`} key={index}>
                    <Book 
                        volumeTitle={`${(page-1)*100} - ${page*100}`} 
                        coverImage={volumeBackground}
                        isMain={true}
                        order={order}
                    />
                </Link>
            )
        }
    })
    
    return (
        <>
            <h1 className='title'>{title}</h1>
            <div className='volume--box'>
                {volumeParts}
            </div>
        </>
    )
}

export default CreateParts;