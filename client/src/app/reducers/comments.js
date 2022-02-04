import { ADD_COMMENT, ADD_COMMENT_ERROR, GET_COMMENTS, GET_COMMENTS_ERROR } from '../index';

const initialState = []

export default function commentsReducer(comments = initialState, action) {
    const { payload, type } = action;
    switch(type) {
        case ADD_COMMENT:
            return [...comments, payload?.postComment]
        case ADD_COMMENT_ERROR:
            return {
                error: payload?.data
            }
        case GET_COMMENTS:
            return payload;
        case GET_COMMENTS_ERROR:
            return {
                error: payload?.data
            }
        default: return comments;
    }
}
