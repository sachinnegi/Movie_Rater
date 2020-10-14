import React from 'react';
import './Loader.css';

function Loader() {
    return (
        <div className="loader__container">
            <div className="sk-chase">
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            </div>
        </div>
    )
}

export default Loader
