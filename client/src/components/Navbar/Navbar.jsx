import React, { useState } from 'react';
import './Navbar.scss';
import { onLogout } from '../../app/action/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const [show, setShow] = useState(false);
    const navigate = useNavigate()
    const handleLogout = () => {
        onLogout()
        navigate('/')
    }
    const authState = useSelector(state => state.auth)
    const { isAuthenticated } = authState;
    return (
        <div className="nav-container">
            <div className="title-container">
                <h1>ConnectOne</h1>
            </div>
            <i className="fas fa-bars" onClick={() => setShow(!show)} />
            <ul className={!show ? 'collapsed is-expanded' : 'is-expanded'}>
                {!isAuthenticated ? (
                    <>
                        <li><a className="nav-link" href="/register">Register</a></li>
                        <li><a className="nav-link" href="/">Login</a></li>
                    </>
                ) : (
                    <>
                        <li><a className="nav-link" href="/create-post">Create</a></li>
                        <li><a className="nav-link" href="/feed">Feed</a></li>
                        <li><a className="nav-link" href="" onClick={handleLogout}>Logout</a></li>
                    </>
                )}
            </ul>
        </div>
    );
}

export default Navbar;
