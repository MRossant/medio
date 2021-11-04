import { connect } from "react-redux";
import Home from './home';
import {logout} from '../../actions/session';
import {showModal} from '../../actions/modal_actions';
import { fetchStories } from "../../actions/story_actions";

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    stories: Object.values(state.entities.stories)
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    showModal: content => dispatch(showModal(content)),
    fetchStories: () => dispatch(fetchStories())
});

export default connect(mSTP, mDTP)(Home);