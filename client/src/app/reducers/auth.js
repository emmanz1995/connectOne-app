import { AUTHENTICATE_USER, AUTHENTICATE_USER_ERROR } from "../index";

const currentUser = JSON.parse(localStorage.getItem('jwt'))

const initialState = currentUser ? { isAuthenticated: true, currentUser } : { isAuthenticated: false, currentUser: null }

export default function authReducer(auth = initialState, action) {
    const { payload, type } = action;
    switch (type) {
        case AUTHENTICATE_USER:
            return {
                ...auth,
                userInfo: payload.data,
                isAuthenticated: true
            }
        case AUTHENTICATE_USER_ERROR:
            return {
                error: payload,
                token: null
            }

        default: return auth
    }
}

