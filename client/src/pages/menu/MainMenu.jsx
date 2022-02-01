import React from 'react';
import './menu.scss';

function MainMenu() {
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
        </main>
    );
}

export default MainMenu;
