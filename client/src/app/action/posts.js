import {CREATE_POST, CREATE_POST_ERROR, DELETE_POST, DELETE_POST_ERROR, GET_POSTS, GET_USER_ERROR} from '../types';
import axios from 'axios';
import AuthHeader from '../../util/authHeader';
const { REACT_APP_API_URL } = process.env;



const user = JSON.parse(localStorage.getItem('jwt'))

export const fetchPosts = () => async (dispatch) => {
    try {
        const response = await axios?.get(`${REACT_APP_API_URL}/api/posts/getposts`)
        dispatch({
            type: GET_POSTS,
            payload: response?.data
        })
    } catch(error) {
        console.log(error);
        dispatch({
            type: GET_USER_ERROR,
            payload: error
        })
    }
}

export const onCreatePost = (formData) => async (dispatch) => {
    try {
        const response = await axios.post(`${REACT_APP_API_URL}/api/posts/createpost`, formData, {
            headers: {
                Authorization: `Bearer ${user?.token}`,
                'Content-Type': 'application/json'
            }
        })
        dispatch({
            type: CREATE_POST,
            payload: response?.data
        })
    } catch(err) {
        console.log(err);
        dispatch({
            type: CREATE_POST_ERROR,
            payload: err
        })
    }
}

export const onDeletePost = (id) => async (dispatch) => {
    try {
        const response = await axios.delete(`${REACT_APP_API_URL}/api/posts/deletepost/${id}`, {
            headers: {
                Authorization: `Bearer ${user?.token}`,
                'Content-Type': 'application/json'
            }
        })
        dispatch({
            type: DELETE_POST,
            payload: response?.data
        })
    } catch(err) {
        console.log(err);
        dispatch({
            type: DELETE_POST_ERROR,
            payload: err?.response?.data?.msg
        })
    }
}