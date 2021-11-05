import { connect } from "react-redux";
import {fetchStory} from '../../actions/story_actions';
import StoryShow from './story_show';
import { fetchUser } from '../../actions/user_actions'

const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    story: state.entities.stories[ownProps.match.params.storyId]
});

const mDTP = dispatch => ({
    fetchStory: story => dispatch(fetchStory(story)),
    fetchUser: user => dispatch(fetchUser(user))
});

export default connect(mSTP, mDTP)(StoryShow);