const INITIAL_STATE = {
    authUser: null,
    photoURL:'https://cdn3.iconfinder.com/data/icons/user-avatars-1/512/users-6-2-256.png'
};

const applySetAuthUser = (state, action) => ({
    ...state,
    authUser: action.authUser,
});
const applySetPictureURL = (state, action) => ({
    ...state,
    photoURL: action.photoURL,
})

function sessionReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'AUTH_USER_SET': {
            return applySetAuthUser(state, action);
        }
        case 'PICTURE_URL_SET': {
            return applySetPictureURL(state, action);
        }
        default:
            return state;
    }
}

export default sessionReducer;