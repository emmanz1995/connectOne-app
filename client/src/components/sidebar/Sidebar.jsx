import React from 'react';
import './sidebar.scss';

const Sidebar = () => {
    return (
        <aside className="sidebar-wrapper">
            <hr/><hr/>
            <h1>Story Posts</h1>
            <hr/><hr/><br />
            <div className="padding">
                <div className="aside-link-area">
                    <li><a href="">Create Your Post</a></li><br />
                    <li><a href="">About</a></li><br />
                    <li><a href="">Logout</a></li>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
