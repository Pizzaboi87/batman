import load_1 from '../../../../assets/loading_1.gif'
import load_2 from '../../../../assets/loading_2.gif'

import './loading.css'

const Loading = ({ img }) => {
    return (
        <div className='loading'>
            <img src={img === 1 ? `${load_1}` : `${load_2}`} alt='loading' />
            <h2>Loading...</h2>
        </div>
    )
}

export default Loading;