import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import './layout.scss';

const Layout = ({ children }) => {
    const [openDraw, setOpenDraw] = useState(false);

    const openSidebar = () => setOpenDraw(true);
    const closeSidebar = () => setOpenDraw(false);
    return (
        <div>
            <Navbar openSidebar={openSidebar} closeSidebar={closeSidebar} openDraw={openDraw} />
            <div>
                {openDraw && <div className="responsive-sidebar"><Sidebar /></div>}
                <div className="feed">
                    <div className="feed__main">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Layout;
