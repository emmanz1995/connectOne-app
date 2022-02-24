import { combineReducers } from 'redux';
import user from './user';
import { postsReducer } from './posts';
import { commentsReducer } from './comments';

export default combineReducers({
    user,
    postsReducer,
    commentsReducer
})
