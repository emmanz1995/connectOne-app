import React from 'react';
import './menu.scss';
import { useNavigate } from 'react-router-dom';

function MainMenu() {
    const navigate = useNavigate();
    return (
        <main className="menu">
            <div className="menu__banner">
                <div className="userInfo__section">
                    <div>
                        <h2>Welcome to the Main Menu</h2>
                        <h3>Hi, emmanz95</h3>
                    </div>
                    <div>
                        <button className="btn__editProfile">Edit Profile</button>
                    </div>
                </div>
            </div>
            <div className="menu__choices">
                <div className="menu__choices__button" onClick={() => navigate('/feed')}>
                    <h2>Posts</h2>
                </div>
                <div className="menu__choices__button">
                    <h2>Users</h2>
                </div>
                <div className="menu__choices__button" onClick={() => navigate('/create-post')}>
                    <h2>Create Posts</h2>
                </div>
                <div className="menu__choices__button">
                    <h2>Profile</h2>
                </div>
            </div>
        </main>
    );
}

export default MainMenu;
