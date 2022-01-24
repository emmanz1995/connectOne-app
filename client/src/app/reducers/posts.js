import {
    CREATE_POSTS, GET_POSTS,
    UPDATE_POSTS, DELETE_POSTS,
    CREATE_POSTS_ERROR, GET_POSTS_ERROR,
    UPDATE_POSTS_ERROR, DELETE_POSTS_ERROR
} from '../index';

const initialState = []

function postReducer(posts = initialState, action) {
    const { type, payload } = action;
    switch(type) {
        case CREATE_POSTS:
            return [...posts, payload];
        case GET_POSTS:
            return payload;
        case UPDATE_POSTS:
            return posts?.map(post => {
                if(post?._id === payload?._id) {
                    return {
                        ...post,
                        ...payload
                    }
                } else {
                    return post;
                }
            })
        case DELETE_POSTS:
            return posts.filter((post) => post.id !== payload.id);
        case CREATE_POSTS_ERROR:
            return {
                error: payload?.data
            }
        case GET_POSTS_ERROR:
            return {
                error: payload?.data
            }
        case UPDATE_POSTS_ERROR:
            return {
                error: payload?.data
            }
        case DELETE_POSTS_ERROR:
            return {
                error: payload?.data
            }
        default: return posts
    }

}

export default postReducer;
