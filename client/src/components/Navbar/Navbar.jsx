import React, { useState } from 'react';
import './navbar.scss';
import Home from '../../assets/icons/home.svg';
import Plus from '../../assets/icons/plus.svg';
import Bookmark from '../../assets/icons/bookmark.svg';
import Logout from '../../assets/icons/sign-out.svg';
import { Auth } from '../../api/auth';
import { useNavigate } from 'react-router-dom';
import CreatePostModal from "../modal/createPostModal/CreatePostModal";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);
    const navigate = useNavigate();
    const handleLogout = (evt) => {
        evt.preventDefault();
        Auth.onLogout();
        navigate('/');
    }
    return (
        <div className="navbar">
            <div className="nav">
                <h1 className="navbar__title">ConnectOne</h1>
                <ul className="navbar__list">
                    <a href="/" className="navbar__link">
                        <img src={Home} alt="Home" width="600" height="400" className="icon__link" />
                    </a>
                    <a className="navbar__link">
                        <img src={Plus} alt="Plus" width="600" height="400" className="icon__link" onClick={toggle} />
                    </a>
                    {open && <CreatePostModal toggle={toggle} />}
                    <a href="/" className="navbar__link">
                        <img src={Bookmark} alt="Bookmark" width="600" height="400" className="icon__link" />
                    </a>
                    <a href="/" className="navbar__link">
                        <img src={Logout} alt="Logout" width="600" height="400" className="icon__link" onClick={handleLogout} />
                    </a>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
