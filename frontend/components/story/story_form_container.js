import { connect } from "react-redux";
import StoryForm from './story_form';
import {createStory} from '../../actions/story_actions';

const mSTP = state => ({
    author_id: state.session.id,
    currentUser: state.entities.users[state.session.id],
    formType: "Create Story"
});

const mDTP = dispatch => ({
    processForm: story => dispatch(createStory(story))
});

export default connect(mSTP, mDTP)(StoryForm);

