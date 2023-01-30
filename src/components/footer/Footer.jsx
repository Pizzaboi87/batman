import logo from '../../assets/logo_bottom.webp'
import Clouds from '../clouds/Clouds'
import './footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer--clouds'>
                <Clouds />
            </div>
            <img src={logo} className='footer--img' alt='batman logo'/>
            <a href='https://peterweiser.com' target='_blank' >Created by Peter Weiser</a>
            <h4>2023</h4>
            <a href='https://comicvine.gamespot.com/' target='_blank' >Powered by ComicVine</a>
        </div>
    )
}

export default Footer;