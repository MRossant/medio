import { connect } from "react-redux";
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
    fetchUser: userId => dispatch(fetchUser(userId))
});

export default connect(mSTP, mDTP)(BookmarkIndex);