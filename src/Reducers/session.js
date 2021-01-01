import {applySetAuthUser, applySetPictureURL} from "../actions/session";

const INITIAL_STATE = {
    authUser: null,
    photoURL: 'https://cdn4.iconfinder.com/data/icons/startup-89/64/41-Entrepreneur-256.png', // default avatar picture
};

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