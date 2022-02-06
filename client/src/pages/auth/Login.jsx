import React, { useState } from 'react';
import './auth.scss';
import LoginImg from '../../assets/undraw_secure_login_pdn4.svg';
import { onLogin } from '../../app/action/auth';
import { useDispatch } from 'react-redux';
import { useNavigate, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';
import { useFormik } from 'formik';

const LoginSchema = Yup.object().shape({
    username: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    password: Yup.string()
        .test(
            "regex",
            "Password must be min 8 characters, and have 1 Special Character, 1 Uppercase, 1 Number and 1 Lowercase",
            validation => {
                let regex = new RegExp("^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$")
                return regex.test(validation)
            }
        )
        .required('Required'),
});

function Login() {
    const {
        handleSubmit,
        handleChange,
        handleBlur,
        touched,
        errors,
    } = useFormik({
        validationSchema: LoginSchema,
        initialValues: {
            username: '',
            password: ''
        },
        onSubmit: (values) => {
            const formData = {
                username: values?.username,
                password: values?.password
            }
            dispatch(onLogin(formData, navigate)).then((success) => {
                console.log(success);
            }).catch((error) => console.log(error))
        }
    })
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const authState = useSelector(state => state.auth);
    const { isAuthenticated } = authState;

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
                        <div>
                            <h3><i className="fas fa-key" />{' '}Login</h3>
                            <p>Sign into your account now!</p><br />
                        </div>
                        <form className="authform" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username">Username</label>
                                <input
                                    type="text"
                                    className="authform__input"
                                    placeholder="John.Doe"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    name="username"
                                />
                                {errors?.username && touched?.username ? (
                                    <div>{errors?.username}</div>
                                ) : null}
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    className="authform__input"
                                    placeholder="*****************"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    name="password"
                                />
                                {errors?.password && touched?.password ? (
                                    <div>{errors?.password}</div>
                                ): null}
                                <input type="submit" className="authform__btn" value="Login" />
                                <br /><br />
                                <div>
                                    <p>Need an account? Join here:</p><br/>
                                    <button className="authform__joinBtn" onClick={() => navigate('/register')}>Join Now</button>
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
