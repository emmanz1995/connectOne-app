import axios from 'axios';
import { CREATE_COMMENTS, GET_COMMENTS, GET_COMMENTS_ERROR } from '../types';

const { REACT_APP_API_URL } = process.env;

const user = JSON.parse(localStorage.getItem('jwt'));

export const getComments = (postId) => async (dispatch) => {
    try {
        const response = await axios.get(`${REACT_APP_API_URL}/api/comment/getcomments/${postId}`, {
            headers: {
                Authorization: `Bearer ${user?.token}`
            }
        })
        dispatch({
            type: GET_COMMENTS,
            payload: response?.data
        })
        console.log(user?.token)
    } catch(err) {
        console.log(err);
        dispatch({
            type: GET_COMMENTS_ERROR,
            payload: err
        })
    }
}