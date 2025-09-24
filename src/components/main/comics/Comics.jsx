import React from 'react';
import { Link } from 'react-router-dom';
import './comics.css';

const Comics = () => {
    return (
        <div className="content">
            <h1 className="title">Comics</h1>
            <div className="comics-options">
                <Link to="/comics/browsing" className="comics-option">
                    Browse Comics
                </Link>
                <Link to="/comics/search" className="comics-option">
                    Search Comics
                </Link>
            </div>
        </div>
    );
};

export default Comics;