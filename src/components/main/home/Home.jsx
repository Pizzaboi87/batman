import React from 'react';
import CharacterList from './CharacterList';
import enemiesData from './card/enemiesData';
import alliesData from './card/alliesData';
import batmanData from './card/batmanData';
import './home.css';

const Home = () => {
    return (
        <div className="content">
            <h1 className="title">Main Characters</h1>
            <div className="characters">
                <CharacterList title="Batman" characters={[batmanData]} />
                <CharacterList title="Allies" characters={alliesData} />
                <CharacterList title="Enemies" characters={enemiesData} />
            </div>
        </div>
    );
};

export default Home;