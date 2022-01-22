import React, { useState } from 'react';
import './Navbar.scss';

const Navbar = () => {
    const [show, setShow] = useState(false);
    return (
        <div className="nav-container">
            <div className="title-container">
                <h1>MERN STORYTIME</h1>
            </div>
            <i className="fas fa-bars" onClick={() => setShow(!show)} />
            <ul className={!show ? 'collapsed is-expanded' : 'is-expanded'}>
                <li><a className="nav-link" href="/create-post">Create</a></li>
                <li><a className="nav-link" href="">Articles</a></li>
                <li><a className="nav-link" href="">About</a></li>
            </ul>
        </div>
    );
}

export default Navbar;
