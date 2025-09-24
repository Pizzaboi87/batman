import React from 'react';
import Card from './card/Card';

const CharacterList = ({ title, characters }) => {
    return (
        <div className="character-list">
            <h2>{title}</h2>
            <div className="character-grid">
                {characters.map((character) => (
                    <Card key={character.id} {...character} />
                ))}
            </div>
        </div>
    );
};

export default CharacterList;