import {applyOpen, applyIsLogIn, applyClose, applyIsSignUp} from '../actions/popUp';
const INITIAL_STATE = {
    isOpen: false,
    isLogIn: true
}

function popUpReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'IS_OPEN': {
            return applyOpen(state);
        }

        case 'IS_LOG_IN': {
            return applyIsLogIn(state);
        }

        case 'IS_CLOSE': {
            return applyClose(state);
        }
        case 'IS_SIGN_UP': {
            return applyIsSignUp(state);
        }


        default:
            return state;
    }
}

export default popUpReducer;