import React from 'react';
import './banner.scss';

const Banner = ({ title, description }) => {
    return (
        <div className="banner-container">
            <div className="banner-overlay">
                <div className="banner-title">
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default Banner;
