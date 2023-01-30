import Modal from '../../common/modal/Modal'
import { useState } from 'react'
import './gameFolder.css'

const GameFolder = (props) => {

    const { developer, publisher, releaseDate, title, youTube, details } = props.game;
    const [isOpen, setIsOpen] = useState(false)
    const modalOpen = () => {setIsOpen(true)}
    const modalClose = () => {setIsOpen(false)}

    const logoSerial = Array.from({length: 6}, (_, i) => 'logo' + (i + 1))
    const sideLogos = logoSerial.map((serial, index) => {
        const logo = props.game[`${serial}`]
        return (
            <div 
                key={index} 
                className={`${serial}`} 
                style={{backgroundImage: `url(${logo})`}}
            >
            </div>
        )
    })

    const detailLogos = logoSerial.map((serial, index) => {
        const logo = props.game[`${serial}`]
        const logoTitle = props.game[`${serial}_title`]
        const logoWiki = props.game[`${serial}_wiki`]
        return (
            <div key={index}>
                {logo &&
                    <a href={logoWiki} target='_blank'>
                        <img src={logo} alt={logoTitle} title={logoTitle} />
                    </a>
                }
            </div>  
        )
    })
    
    return (
        <div className='game'>
            <div className='folder'>
                <div className='batlogo'></div>
                <div className='folder--foreground'></div>
                <div className='folder--background'></div>
                <div className='folder--background--shadow'></div>
                <div className='folder--ear'></div>
                <div className='folder--ear--shadow'></div>
                <div className='folder--paper'>
                    <h1>{title}</h1>
                    <p>Developer: {developer}</p>
                    <p>Publisher: {publisher}</p>
                    <p>Release: {releaseDate}</p>
                    <button onClick={modalOpen} className='modalButton openButton'>Learn More</button>
                </div>
            </div>
            <div className='folder--label'>
                {sideLogos}
            </div>

            <Modal open={isOpen}>
                <i className='close fa-solid fa-circle-xmark' onClick={modalClose}></i>
                <h1>{title}</h1>
                <div className='media'>
                    <iframe
                        src={`https://www.youtube.com/embed/${youTube}?controls=1`}
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' 
                        allowFullScreen
                    />
                    <div className='platforms'>
                        {detailLogos}
                    </div>
                </div>
                <p>{details}</p>
                <button onClick={modalClose} className='modalButton inModal'>Close</button>
            </Modal>
        </div>
    )
}

export default GameFolder;