import React from 'react';
import './auth.scss';

function Login() {
    return (
        <div className="main-container">
            <div className="background">
                <div className="form-background">
                    <h4>Login</h4><br />
                    <form className="auth-form">
                        <input type="text" className="input-field" placeholder="Email" /><br/><br/>
                        <input type="password" className="input-field" placeholder="Password" /><br/><br/>
                        <input type="submit" className="btn-auth" value="Login" />
                    </form>
                </div>
            </div>
            {/*<div className="auth-background"></div>*/}
        </div>
    );
}

export default Login;
