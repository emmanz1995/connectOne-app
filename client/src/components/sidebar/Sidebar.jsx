import React from 'react';
import './sidebar.scss';
import Hamburger from '../../assets/icons/hamburger-menu.svg';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul className="sidebar__list">
                <div className="right">
                    <h2>Users</h2>
                </div>
                <hr />
                <li><a href="">emmanz95</a></li>
                <li><a href="">Jed992</a></li>
                <li><a href="">DimitriRascov</a></li>
                <li><a href="">Ben90Z</a></li>
                <li><a href="">TonyStark</a></li>
            </ul>
        </div>
    );
}

export default Sidebar;
