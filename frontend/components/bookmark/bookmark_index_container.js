import { connect } from "react-redux";
import { fetchStory } from '../../actions/story_actions';
import BookmarkIndex from './bookmark_index';

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
    fetchStory: storyId => dispatch(fetchStory(storyId))
});

export default connect(mSTP, mDTP)(BookmarkIndex);