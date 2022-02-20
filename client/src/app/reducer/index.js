import { combineReducers } from 'redux';
import user from './user';
import {postsReducer} from './posts';

export default combineReducers({
    user,
    postsReducer
})
