import React from 'react';
import './navbar.scss';
import Home from '../../assets/icons/home.svg';
import Plus from '../../assets/icons/plus.svg';
import Bookmark from '../../assets/icons/bookmark.svg';
import Logout from '../../assets/icons/sign-out.svg';

const Navbar = () => {
    return (
        <div className="navbar">
            <h1 className="navbar__title">ConnectOne</h1>
            <ul className="navbar__list">
                <a href="/" className="navbar__link">
                    <img src={Home} alt="Home" width="600" height="400" className="icon__link" />
                </a>
                <a href="/" className="navbar__link">
                    <img src={Plus} alt="Plus" width="600" height="400" className="icon__link" />
                </a>
                <a href="/" className="navbar__link">
                    <img src={Bookmark} alt="Bookmark" width="600" height="400" className="icon__link" />
                </a>
                <a href="/" className="navbar__link">
                    <img src={Logout} alt="Logout" width="600" height="400" className="icon__link" />
                </a>
            </ul>
        </div>
    );
}

export default Navbar;
