import React from 'react';
import './backdrop.scss'

const Backdrop = ({ children, toggle }) => {
    return (
        <div className="backdrop" onClick={toggle}>
            {children}
        </div>
    );
}

export default Backdrop;
