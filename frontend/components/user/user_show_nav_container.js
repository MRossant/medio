import { connect } from "react-redux";
import UserShowNav from './user_show_nav';
import {logout} from '../../actions/session';
import { showModal, hideModal } from "../../actions/modal_actions";

const mSTP = (state, ownProps) => ({
    // user: state.entities.users[ownProps.match.params.userId],
    currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    showModal: content => dispatch(showModal(content)),
    hideModal: () => dispatch(hideModal())
});

export default connect(mSTP, mDTP)(UserShowNav);