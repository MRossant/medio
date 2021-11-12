import { connect } from "react-redux";
import { deleteBookmark, fetchBookmarks } from "../../actions/bookmark_actions";
import { fetchStory, fetchStories } from '../../actions/story_actions';
import { fetchUser } from "../../actions/user_actions";
import BookmarkIndex from './bookmark_index';

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    stories: state.entities.stories
});

const mDTP = dispatch => ({
    fetchStory: storyId => dispatch(fetchStory(storyId)),
    fetchStories: () => dispatch(fetchStories()),
    fetchBookmarks: () => dispatch(fetchBookmarks()),
    fetchUser: userId => dispatch(fetchUser(userId)),
    deleteBookmark: bookmarkId => dispatch(deleteBookmark(bookmarkId))
});

export default connect(mSTP, mDTP)(BookmarkIndex);