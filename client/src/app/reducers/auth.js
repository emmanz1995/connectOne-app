import {AUTHENTICATE_USER} from "../index";

const initialState = {
    userInfo: {},
    isAuthenticated: false
}

export default function auth(auth = initialState, action) {
    const { payload, type } = action;
    switch (type) {
        case AUTHENTICATE_USER:
            return {
                userInfo: payload.data,
                isAuthenticated: true
            }
    }
}

