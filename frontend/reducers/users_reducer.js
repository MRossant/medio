import { RECEIVE_CURRENT_USER } from "../actions/session";
import { RECEIVE_ALL_USERS, RECEIVE_USER } from "../actions/user_actions";

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, nextState, {[action.user.id]: action.user});
        case RECEIVE_ALL_USERS:
            return action.users;
        case RECEIVE_USER:
            nextState[action.user.id] = action.user;
            return nextState;
        default:
            return state;
    }
};

export default usersReducer;