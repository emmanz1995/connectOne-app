import {CREATE_POST, CREATE_POST_ERROR, DELETE_POST, DELETE_POST_ERROR, GET_POSTS, GET_POSTS_ERROR} from '../types';

const initialState = []

export const postsReducer = (posts = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_POSTS:
            return payload;
        case GET_POSTS_ERROR:
            return {
                error: payload,
                loading: false
            }
        case CREATE_POST:
            return [...posts, payload]
        case CREATE_POST_ERROR:
            return {
                error: payload,
            }
        case DELETE_POST:
            return posts.filter((post) => post._id !== payload?._id)
        case DELETE_POST_ERROR:
            return {
                error: payload,
            }
        default: return posts;
    }
}
