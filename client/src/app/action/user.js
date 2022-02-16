import axios from 'axios';
import { GET_USER, GET_USER_ERROR } from '../types';

const { REACT_APP_API_URL } = process.env;
const token = JSON.parse(localStorage.getItem('jwt'))

export const getUser = () => async (dispatch) => {
    try {
        const response = await axios.get(`${REACT_APP_API_URL}/api/auth/me`,{
            headers: {
                Authorization: `Bearer ${token?.token}`
            }
        })
        dispatch({
            type: GET_USER,
            payload: response?.data
        })
    } catch(e) {
        console.log(e);
        dispatch({
            payload: e?.response?.data?.msg,
            type: GET_USER_ERROR
        })
    }
}
