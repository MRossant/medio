import { signup } from "../../actions/session";
import { connect } from "react-redux";
import SessionForm from "./session_form";

const mSTP = state => ({
    errors: state.errors,
    formType: 'signup'
});

const mDTP = dispatch => ({
    action: user => dispatch(signup(user)),
    showModal: content => dispatch(showModal(content)),
    hideModal: () => dispatch(hideModal())
});

export default connect(mSTP, mDTP)(SessionForm);