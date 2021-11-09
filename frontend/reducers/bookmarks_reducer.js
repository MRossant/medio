import {
    RECEIVE_ALL_BOOKMARKS,
    RECEIVE_BOOKMARK,
    REMOVE_BOOKMARK
} from '../actions/bookmark_actions';

const bookmarksReducer = (state={}, action) => {
    Object.freeze(state);

    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ALL_BOOKMARKS:
            return action.bookmarks;
        case RECEIVE_BOOKMARK:
            nextState[action.bookmark.id] = action.bookmark;
            return nextState;
        case REMOVE_BOOKMARK:
            delete nextState[action.bookmarkId];
            return nextState;
        default:
            return state;
    }
};

export default bookmarksReducer;