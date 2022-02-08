import React from 'react';
import './landing.scss';

function LandingPage() {
    return (
        <div className="landing">
            <div className="landing__banner">
                <div className="landing__banner__getstarted"></div>
                <div className="landing__banner__landingInfo"></div>
            </div>
            {/*<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">*/}
            {/*    <path fill="#6c63ff" fill-opacity="1" d="M0,256L48,261.3C96,267,192,277,288,240C384,203,480,117,576,112C672,107,768,181,864,186.7C960,192,1056,128,1152,96C1248,64,1344,64,1392,64L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />*/}
            {/*</svg>*/}
        </div>
    );
}

export default LandingPage;
