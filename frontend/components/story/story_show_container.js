import { connect } from "react-redux";
import {fetchStory} from '../../actions/story_actions';
import StoryShow from './story_show';
import { fetchUser } from '../../actions/user_actions'
import { showModal } from "../../actions/modal_actions";

const mSTP = (state, ownProps) => {
    // debugger
    return {
    currentUser: state.entities.users[state.session.id],
    story: state.entities.stories[ownProps.match.params.storyId]
    }
};

const mDTP = dispatch => ({
    fetchStory: storyId => dispatch(fetchStory(storyId)),
    fetchUser: user => dispatch(fetchUser(user)),
    showModal: content => dispatch(showModal(content)),
    logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(StoryShow);