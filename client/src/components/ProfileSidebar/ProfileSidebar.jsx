import React from 'react';
import './profileSidebar.scss';

const ProfileSidebar = () => {
    return (
        <div className="profileSidebar">
            <div className="profileSidebar__top">
                <div className="avatar-container">
                    <img src={} alt="User Avatar" />
                </div>
                <div className="user-info"></div>
            </div>
            <div className="profileSidebar__left">
                <div className="post-container"></div>
            </div>
        </div>
    );
}

export default ProfileSidebar;