import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './header.css';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <Link to="/" className="logo">
                    Batman Fan Page
                </Link>
                <nav className="nav">
                    <Link to="/movies">Movies</Link>
                    <Link to="/comics">Comics</Link>
                    <Link to="/games">Games</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;