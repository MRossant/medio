import * as BookmarkApiUtil from '../util/bookmark_api_util';

export const RECEIVE_ALL_BOOKMARKS = 'RECEIVE_ALL_BOOKMARKS';
export const RECEIVE_BOOKMARK = 'RECEIVE_BOOKMARK';
export const REMOVE_BOOKMARK = 'REMOVE_BOOKMARK';

const receiveBookmarks = bookmarks => ({
    type: RECEIVE_ALL_BOOKMARKS,
    bookmarks
});

const receiveBookmark = bookmark => ({
    type: RECEIVE_BOOKMARK,
    bookmark
});

const removeBookmark = bookmarkId => ({
    type: REMOVE_BOOKMARK,
    bookmarkId
});

export const fetchBookmarks = () => dispatch => BookmarkApiUtil.fetchBookmarks()
    .then(bookmarks => dispatch(receiveBookmarks(bookmarks)))

export const postBookmark = bookmark => dispatch => BookmarkApiUtil.postBookmark(bookmark)
    .then(bookmark => dispatch(receiveBookmark(bookmark)))

export const deleteBookmark = bookmarkId => dispatch => BookmarkApiUtil.deleteBookmark(bookmarkId)
    .then(() => dispatch(removeBookmark(bookmarkId)))