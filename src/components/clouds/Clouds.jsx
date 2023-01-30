import cloud1 from '../../assets/cloud1.webp'
import cloud2 from '../../assets/cloud2.webp'
import cloud3 from '../../assets/cloud3.webp'
import cloud4 from '../../assets/cloud4.webp'
import cloud5 from '../../assets/cloud5.webp'

import './clouds.css'

const Clouds = () => {
    return (
        <>
            <img src={cloud1} alt='cloud' className='clouds cloud_1'/>
            <img src={cloud2} alt='cloud' className='clouds cloud_2'/>
            <img src={cloud3} alt='cloud' className='clouds cloud_3'/>
            <img src={cloud4} alt='cloud' className='clouds cloud_4'/>
            <img src={cloud5} alt='cloud' className='clouds cloud_5'/>
        </>
    )
}

export default Clouds;