import { combineReducers } from "redux";
import bookmarksReducer from "./bookmarks_reducer";
import storiesReducer from "./stories_reducer";
import usersReducer from "./users_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    stories: storiesReducer,
    bookmarks: bookmarksReducer
})

export default entitiesReducer;