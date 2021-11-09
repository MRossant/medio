import { connect } from "react-redux";
import { postBookmark, deleteBookmark } from '../../actions/bookmark_actions';
import StoryIndex from "./story_index";
import { showModal } from "../../actions/modal_actions";
import { fetchUsers } from "../../actions/user_actions";
import { fetchBookmarks } from "../../actions/bookmark_actions";

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    bookmarks: state.entities.bookmarks
});

const mDTP = dispatch => ({
    postBookmark: bookmark => dispatch(postBookmark(bookmark)),
    deleteBookmark: bookmarkId => dispatch(deleteBookmark(bookmarkId)),
    showModal: content => dispatch(showModal(content)),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchBookmarks: () => dispatch(fetchBookmarks())
});

export default connect(mSTP, mDTP)(StoryIndex);