import background from '../../assets/batman_background_siluette.webp'
import Clouds from '../clouds/Clouds'
import Nav from '../nav/Nav'
import './header.css'

const Header = () => {
    return (
        <>
            <div className='header'>
                <div className='header--clouds'>
                    <Clouds />
                </div>
                <div className='header--imagecontainer'>
                    <svg className="svg">
                        <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox"><path d="M0.667,0 S0.663,0.098,0.642,0.159 c-0.016,0.047,-0.033,0.05,-0.055,0.06 c-0.013,0.006,-0.041,0.015,-0.048,-0.003 c-0.003,-0.008,-0.004,-0.083,-0.004,-0.11 c0,-0.027,-0.002,-0.066,-0.004,-0.071 c-0.001,0.012,-0.003,0.046,-0.004,0.054 S0.521,0.136,0.521,0.143 a0.117,0.338,0,0,0,-0.041,0 c-0.001,-0.007,-0.004,-0.046,-0.005,-0.054 s-0.003,-0.042,-0.004,-0.054 c-0.002,0.006,-0.004,0.044,-0.004,0.071 c0,0.026,-0.001,0.101,-0.004,0.11 c-0.007,0.018,-0.035,0.009,-0.048,0.003 c-0.022,-0.01,-0.039,-0.013,-0.055,-0.06 C0.337,0.098,0.333,0,0.333,0 H0 s0.096,0.09,0.134,0.272 c0.023,0.108,0.019,0.232,0.014,0.296 C0.234,0.555,0.305,0.555,0.376,0.629 c0.095,0.099,0.115,0.302,0.124,0.371 c0.009,-0.069,0.029,-0.272,0.124,-0.371 c0.071,-0.074,0.142,-0.074,0.228,-0.06 c-0.006,-0.064,-0.009,-0.189,0.014,-0.296 C0.904,0.09,1,0,1,0"></path></clipPath>
                    </svg>
                    <div className="clipped"></div>
                </div>
            </div>
            <Nav />
            <div className='header--background'>
                <img src={background} className='header--background siluette' alt='batman siluette'/>
            </div>
        </>
    )
}

export default Header;