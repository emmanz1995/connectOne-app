import { AUTHENTICATE_USER, AUTHENTICATE_USER_ERROR } from '../index';

const currentUser = JSON.parse(localStorage.getItem('jwt'))

const initialState = currentUser ? { isAuthenticated: true, currentUser } : { isAuthenticated: false, currentUser: null }

export default function authReducer(auth= initialState, action) {
    const { payload, type } = action;
    switch (type) {
        case AUTHENTICATE_USER:
            return {
                ...auth,
                userInfo: payload.user,
                isAuthenticated: true
            }
        case AUTHENTICATE_USER_ERROR:
            return {
                ...auth,
                userInfo: null,
                isAuthenticated: false
            }
        default: return auth
    }
}

