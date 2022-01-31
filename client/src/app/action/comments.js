import axios from 'axios';
import { AuthHeader } from '../../util/authHeader';
import {ADD_COMMENT, ADD_COMMENT_ERROR, GET_POSTS, GET_COMMENTS_ERROR, GET_COMMENTS} from '../index';

const AuthorizationHeader = AuthHeader()
AuthorizationHeader['Content-Type'] = 'application/json';

const { REACT_APP_API_URL } = process.env;

export const onAddComment = (formData, id) => async (dispatch) => {
    try {
        const response = await axios.post(`${REACT_APP_API_URL}/api/comment/addcomment/${id}`, formData, {
            headers: AuthorizationHeader
        })
        dispatch({
            type: ADD_COMMENT,
            payload: response?.data
        })
    } catch(error) {
        console.log(error);
        dispatch({
            type: ADD_COMMENT_ERROR,
            payload: error?.response?.data?.msg
        })
    }
}

export const getComments = (id) => async (dispatch) => {
    try {
        const response = await axios.get(`${REACT_APP_API_URL}/api/comment/getcomments/${id}`, {
            headers: AuthHeader()
        })
        dispatch({
            type: GET_COMMENTS,
            payload: response?.data
        })
    } catch(error) {
        console.log(error)
        dispatch({
            type: GET_COMMENTS_ERROR,
            payload: error
        })
    }
}