import React from 'react';
import './auth.scss';
import LoginImg from '../../assets/undraw_secure_login_pdn4.svg';

function Login() {
    return (
        <div className="main-container">
            <div className="secondary-container">
                <div className="info-wrapper">
                    <div className="img-container">
                        <img src={LoginImg} alt="" className="login-img" />
                    </div>
                </div>
                <div className="background">
                    <div className="form-background">
                        <h3><i className="fas fa-key" />{' '}Login</h3><br />
                        <form className="auth-form">
                            <div>
                                <label htmlFor="username">Username</label>
                                <input type="text" className="input-field" placeholder="John.Doe" /><br/><br/>
                                <label htmlFor="password">Password</label>
                                <input type="password" className="input-field" placeholder="*****************" /><br/><br/>
                                <span>
                                    <input type="checkbox" name="passwordReveal" value="Reveal Password" />
                                    <label htmlFor="passwordReveal">Reveal Password</label>
                                </span><br /><br />
                                <input type="submit" className="btn-auth" value="Login" />
                                <br /><br />
                                <div>
                                    <p>Need an account? Join here:</p><br/>
                                    <button className="join-btn">Register</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/*<div className="auth-background"></div>*/}
        </div>
    );
}

export default Login;
