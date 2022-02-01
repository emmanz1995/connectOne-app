import React, { useState } from 'react';
import './auth.scss';
import LoginImg from '../../assets/undraw_secure_login_pdn4.svg';
import { onLogin } from '../../app/action/auth';
import { useDispatch } from 'react-redux';
import { useNavigate, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const authState = useSelector(state => state.auth);
    const { isAuthenticated } = authState;
    const [loginInputs, setLoginInputs] = useState({
        username: '',
        password: ''
    })
    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setLoginInputs({...loginInputs, [name]: value})
    }
    const handleLogin = (evt) => {
        evt.preventDefault();
        const formData = {
            username: loginInputs?.username,
            password: loginInputs?.password
        }
        dispatch(onLogin(formData, navigate)).then((success) => {
            console.log(success);
        }).catch((error) => console.log(error))
    }
    if(isAuthenticated) {
        return <Navigate to={{ pathname: '/menu' }} />
    }
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
                        <form className="auth-form" onSubmit={handleLogin}>
                            <div>
                                <label htmlFor="username">Username</label>
                                <input type="text" className="input-field" placeholder="John.Doe" value={loginInputs?.username} onChange={handleChange} name="username" /><br/><br/>
                                <label htmlFor="password">Password</label>
                                <input type="password" className="input-field" placeholder="*****************" value={loginInputs?.password} onChange={handleChange} name="password" /><br/><br/>
                                <span>
                                    <input type="checkbox" name="passwordReveal" value="Reveal Password" />
                                    <label htmlFor="passwordReveal">Reveal Password</label>
                                </span><br /><br />
                                <input type="submit" className="btn-auth" value="Login" />
                                <br /><br />
                                <div>
                                    <p>Need an account? Join here:</p><br/>
                                    <button className="join-btn" onClick={() => navigate('/register')}>Register</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
