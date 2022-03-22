import {
    CREATE_POST,
    CREATE_POST_ERROR,
    DELETE_POST,
    DELETE_POST_ERROR,
    GET_POSTS,
    GET_POSTS_ERROR,
    LIKE_POST,
    LIKE_POST_ERROR,
    UNLIKE_POST,
    UNLIKE_POST_ERROR
} from '../types';

const initialState = []

export const postsReducer = (posts = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_POSTS:
            return payload;
        case GET_POSTS_ERROR:
            return {
                error: payload
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
        case LIKE_POST:
            return posts?.map((post) => {
                if(post?._id === payload?.id) {
                    return {
                        ...post,
                        ...payload
                    }
                } else {
                    return post
                }
            })
        case LIKE_POST_ERROR:
            return {
                error: payload
            }
        case UNLIKE_POST:
            return posts.map((post) => {
                if(post?.id === payload?.id) {
                    return {
                        ...post, ...payload
                    }
                } else {
                    return post
                }
            })
        default: return posts;
    }
}
