export const applySetAuthUser = (state, action) => ({
    ...state,
    authUser: action.authUser,
});

export const applySetPictureURL = (state, action) => ({
    ...state,
    photoURL: action.photoURL,
})