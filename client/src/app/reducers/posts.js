import {
    CREATE_POSTS, GET_POSTS,
    UPDATE_POSTS, DELETE_POSTS,
    CREATE_POSTS_ERROR, GET_POSTS_ERROR,
    UPDATE_POSTS_ERROR, DELETE_POSTS_ERROR,
    LIKE_POST, LIKE_POST_ERROR, DISLIKE_POST,
    DISLIKE_POST_ERROR
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
        case LIKE_POST:
            return posts?.map(likedPost => {
                if(likedPost?._id === payload?._id) {
                    return {
                        ...likedPost,
                        ...payload
                    }
                } else {
                    return posts;
                }
            })
        case LIKE_POST_ERROR:
            return {
                error: payload?.error
            }
        case DISLIKE_POST:
            return posts?.map(dislikedPost => {
                if(dislikedPost?._id === payload?._id) {
                    return {
                        ...dislikedPost,
                        ...payload
                    }
                } else {
                    return posts
                }
            })
        case DISLIKE_POST_ERROR:
            return {
                error: payload?.error
            }
        default: return posts;
    }

}

export default postReducer;
