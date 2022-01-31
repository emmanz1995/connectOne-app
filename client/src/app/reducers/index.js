import { combineReducers } from 'redux';
import posts from './posts';
import auth from './auth';
import comments from './comments';

export default combineReducers({
    posts,
    auth,
    comments
})
