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
                </div><br />
                <div className="aside-link-area">
                    <h4>Categories</h4><br />
                    <a href="">Gospel</a><br /><br />
                    <a href="">Science and Technology</a><br /><br />
                    <a href="">Maths</a><br /><br />
                    <a href="">Engineering</a>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
