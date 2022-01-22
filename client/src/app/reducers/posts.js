
const initialState = []

function postReducer(posts = initialState, action) {
    const { type, payload } = action;
    switch(type) {
        default: return posts
    }

}

export default postReducer;
