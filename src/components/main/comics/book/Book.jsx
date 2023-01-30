import './book.css'

const Book = ({ volumeTitle, coverImage, isMain, order }) => {
    return (
        <div className={`book--box ${isMain ? 'main--box' : 'notMain--box'}`}>
            <div className={`book--book ${isMain ? 'main--book' : 'notMain--book'}`} style={{backgroundImage: `url(${coverImage})`}}>
                <div className={`book--side ${isMain ? 'main--side' : 'notMain--side'}`}>
                    <p>{volumeTitle}</p>
                </div>
                <div className='book--cover'>
                    {isMain ? <p>{order}<br />{volumeTitle}</p> : <p>{volumeTitle}</p>}
                </div>
            </div>
        </div>
    )
}

export default Book;