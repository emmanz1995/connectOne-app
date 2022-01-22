import React, { useState } from 'react';
import './Navbar.scss';

const Navbar = () => {
    const [show, setShow] = useState(false);
    return (
        <div className="nav-container">
            <div className="title-container">
                <h1>MERN Blog</h1>
            </div>
            <i className="fas fa-bars" onClick={() => setShow(!show)} />
            <ul className={`${!show ? 'collapsed is-expanded' : 'is-expanded'}`}>
                <li><a href="">Create</a></li>
                <li><a href="">Articles</a></li>
                <li><a href="">About</a></li>
            </ul>
        </div>
    );
}

export default Navbar;
