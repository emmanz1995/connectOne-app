import { GET_USER, GET_USER_ERROR } from '../types';

const initialState = []

export default function userReducer(user= initialState, action) {
    const { type, payload } = action;
    switch(type) {
        case GET_USER:
            return payload
        case GET_USER_ERROR:
            return {
                error: payload
            }
        default: return user;
    }
}
