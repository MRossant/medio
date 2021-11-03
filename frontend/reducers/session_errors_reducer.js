import {
    RECEIVE_CURRENT_USER,
    RECEIVE_ERRORS,
    REMOVE_ERRORS
} from '../actions/session';

const _initialErrorState = [];

const sessionErrorsReducer = (state= _initialErrorState, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_ERRORS:
            return action.errors.responseJSON;
        case RECEIVE_CURRENT_USER:
            return _initialErrorState;
        case REMOVE_ERRORS:
            return _initialErrorState;
        default:
            return state;
    }
};

export default sessionErrorsReducer;