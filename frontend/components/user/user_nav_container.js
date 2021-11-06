import { connect } from "react-redux";
import UserNav from './user_nav';
import { logout } from "../../actions/session";

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    // showModal: content => dispatch(showModal(content)),
    hideModal: () => dispatch(hideModal())
});

export default connect(mSTP, mDTP)(UserNav);