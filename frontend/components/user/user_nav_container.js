import { connect } from "react-redux";
import UserNav from './user_nav';
import { logout } from "../../actions/session";
import { hideModal } from "../../actions/modal_actions";

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    hideModal: () => dispatch(hideModal())
});

export default connect(mSTP, mDTP)(UserNav);