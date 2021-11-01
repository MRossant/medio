import { RECEIVE_CURRENT_USER } from "../actions/session";

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, nextState, {[action.user.id]: action.user});
        default:
            return state;
    }
};

export default usersReducer;