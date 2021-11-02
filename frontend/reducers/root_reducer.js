import { combineReducers } from "redux";
import sessionReducer from "./session_reducer";
import entitiesReducer from "./entities_reducer";
import errorsReducer from "./errors_reducer";
// import sessionModalsReducer from "./session_modals_reducer";
import modalsReducer from "./modals_reducer";

const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    errors: errorsReducer,
    modal: modalsReducer // change modal to ui
});

export default rootReducer;