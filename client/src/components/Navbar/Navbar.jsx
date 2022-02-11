import React from 'react';
import './navbar.scss';

const Navbar = () => {
    return (
        <div className="navbar">
            <h1 className="navbar__title">ConnectOne</h1>
            <ul className="navbar__list">
                <li><a href="/" className="navbar__link">Home</a></li>
                <li><a href="/" className="navbar__link">Add</a></li>
                <li><a href="/" className="navbar__link">Save</a></li>
            </ul>
        </div>
    );
}

export default Navbar;
