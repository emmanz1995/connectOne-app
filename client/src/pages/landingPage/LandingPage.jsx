import React from 'react';
import './landing.scss';
import image from '../../assets/images/undraw_programming_re_kg9v.svg';

function LandingPage() {
    return (
        <div className="landing">
            <div className="landing__banner">
                <div className="landing__banner__getstarted">
                    <div className="text__wrapper">
                        <h4 className="text__wrapper__subtitle">Welcome to ConnectOne</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias distinctio eaque est explicabo laborum maiores molestiae, neque obcaecati odit officiis perferendis placeat quae quis, sed similique tenetur vel! Dolor eius eos ex itaque labore molestias numquam quae quod ratione, sed temporibus tenetur totam ullam? Illo iure maxime officiis quas soluta.</p>
                        <form className="getStarted__form">
                            <input type="text" className="getStarted__form__input" name="email" />
                            <button className="getStarted__form__btn">Get Started</button>
                        </form>
                    </div>
                </div>
                <div className="landing__banner__landingInfo">
                    <div className="landingImg">
                        <img src={image} alt="" className="landingImg__img" width="600" height="400" />
                    </div>
                </div>
            </div>
            <div className="landing__services">
                <span className="landing__services__block">post</span>
                <span className="landing__services__block">comment/like</span>
                <span className="landing__services__block">follow</span>
                <span className="landing__services__block">chat</span>
            </div>
        </div>
    );
}

export default LandingPage;
