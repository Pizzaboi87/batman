import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; 2024 Batman Fan Page. All Rights Reserved.</p>
                <p>
                    Created by <a href="https://peterweiser.com" target="_blank" rel="noopener noreferrer">Peter Weiser</a>
                </p>
                <p>
                    Powered by <a href="https://comicvine.gamespot.com/" target="_blank" rel="noopener noreferrer">ComicVine</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;