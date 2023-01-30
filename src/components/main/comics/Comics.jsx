import bubble_right from '../../../assets/bubble_right.webp'
import bubble_left from '../../../assets/bubble_left.webp'
import batmanRead from '../../../assets/batman_read.webp'
import oracleSearch from '../../../assets/oracle.webp'
import { Link } from 'react-router-dom'
import './comics.css'

const Comics = () => {
    return (
        <>
            <h1 className='title'>Comics featuring Batman</h1>
            <h2 className='choose main'>What would you like to do?</h2>
            <div className='options'>
                <Link to={'/comics/browsing/'}>
                    <div className='left'>
                        <h1 className='choose text'>I have time, just browsing the comics.</h1>
                        <img src={bubble_left} alt='speech bubble' className='choose bubble'/>
                        <img src={batmanRead} alt='batman reading' />
                    </div>
                </Link>
                <Link to={'/comics/searching/'}>
                    <div className='right'>
                        <h2 className='choose text'>I know, what I'm looking for.</h2>
                        <img src={bubble_right} alt='speech bubble' className='choose bubble'/>
                        <img src={oracleSearch} alt='oracle searching' />
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Comics;