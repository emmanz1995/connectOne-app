import { CREATE_POSTS, GET_POSTS, CREATE_POSTS_ERROR, GET_POSTS_ERROR } from '../index';

const initialState = []

function postReducer(posts = initialState, action) {
    const { type, payload } = action;
    switch(type) {
        case CREATE_POSTS:
            return [...posts, payload];
        case GET_POSTS:
            return payload;
        case CREATE_POSTS_ERROR:
            return {
                error: payload?.data
            }
        case GET_POSTS_ERROR:
            return {
                error: payload?.data
            }
        default: return posts
    }

}

export default postReducer;
