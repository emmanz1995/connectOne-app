import axios from 'axios';
import { AUTHENTICATE_USER, AUTHENTICATE_USER_ERROR } from '../index';

const { REACT_APP_API_URL } = process.env;

export const onLogin = (formData, navigate) => async dispatch => {
    try {
        const response = await axios.post(`${REACT_APP_API_URL}/api/auth/login`, formData,{
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if(response?.data?.token) {
            localStorage.setItem('jwt', JSON.stringify(response.data));
            navigate('/dashboard');
        }
        dispatch({
            type: AUTHENTICATE_USER,
            payload: response?.data
        })
    } catch(error) {
        dispatch({
            type: AUTHENTICATE_USER_ERROR,
            payload: error?.response?.data
        })
    }
}

export const onLogout = () => {
    localStorage.clear();
}
