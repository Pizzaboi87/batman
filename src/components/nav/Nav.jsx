import { useScrollPosition } from './useScrollPosition'
import menuImg from '../../assets/menu.webp'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import './nav.css'

const Nav = () => {

    const menu = useRef(null)
    const scrollPosition = useScrollPosition()

    const mobileMenu = () => {
        if(window.innerHeight > window.innerWidth) {
            menu.current.classList.toggle('activeMobile')
        }
    }

    return (
        <nav 
            id='checkit' 
            className={scrollPosition > 0 ? 'nav--banner' : 'nav--banner active'}
            onClick={mobileMenu}
            ref={menu}
        >
            <img src={menuImg} alt='hamburger icon' />
            <Link to='/' className='nav--link'>CHARACTERS</Link>
            <Link to='/movies' className='nav--link'>MOVIES</Link>
            <Link to='/comics' className='nav--link'>COMICS</Link>
            <Link to='/games' className='nav--link'>GAMES</Link>
            <p className='made'>
                <a href='https://peterweiser.com' target='_blank'>Created by Peter Weiser</a><br />
                <a href='https://comicvine.gamespot.com' target='_blank'>Powered by ComicVine</a><br />
                2023
            </p>
        </nav>
    )
}

export default Nav;