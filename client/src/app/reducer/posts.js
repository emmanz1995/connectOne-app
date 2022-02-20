import {CREATE_POST, CREATE_POST_ERROR, GET_POSTS, GET_POSTS_ERROR} from '../types';

const initialState = {
    posts: [],
    error: '',
    loading: false
}

export const postsReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_POSTS:
            return {
                ...state,
                posts: payload,
                loading: true
            }
        case GET_POSTS_ERROR:
            return {
                error: payload.error,
                loading: false
            }
        case CREATE_POST:
            return [...payload, state?.posts]
        case CREATE_POST_ERROR:
            return {
                error: payload.error,
                loading: false
            }
        default: return state;
    }
}
