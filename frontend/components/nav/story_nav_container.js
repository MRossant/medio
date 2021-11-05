import {fetchStory} from '../../actions/story_actions';
import { connect } from 'react-redux';
import { showModal } from '../../actions/modal_actions'
import { logout } from '../../actions/session';
import StoryNav from './story_nav';

const mSTP = state => {
    // debugger
    return {
    currentUser: state.entities.users[state.session.id],
    }
};

const mDTP = dispatch => ({
    fetchStory: story => dispatch(fetchStory(story)),
    showModal: content => dispatch(showModal(content)),
    logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(StoryNav);