import { GET_COMMENTS, GET_COMMENTS_ERROR } from '../types';

const initialState = []

export const commentsReducer = (comments = initialState, action) => {
    const { type, payload } = action;
    switch(type) {
        case GET_COMMENTS:
            return payload
        case GET_COMMENTS_ERROR:
            return {
                error: payload
            }
        default: return comments
    }
}