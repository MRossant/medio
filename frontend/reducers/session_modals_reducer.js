import { SHOW_MODAL, HIDE_MODAL } from "../actions/modal_actions";

const sessionModalsReducer = (oldState = null, action) => {
    switch (action.type) {
        case SHOW_MODAL:
            return action.content;
        case HIDE_MODAL:
            return null;
        default:
            return oldState;
    }
};

export default sessionModalsReducer;