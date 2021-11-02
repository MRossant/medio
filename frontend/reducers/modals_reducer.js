import { combineReducers } from "redux";
import sessionModalsReducer from "./session_modals_reducer";

const modalsReducer = combineReducers({
    sessionModal: sessionModalsReducer
});

export default modalsReducer;