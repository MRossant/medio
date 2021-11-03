import { hideErrors, signup } from "../../actions/session";
import { hideModal, showModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import SessionForm from "./session_form";

const mSTP = state => ({
    errors: state.errors.session,
    formType: 'signup'
});

const mDTP = dispatch => ({
    action: user => dispatch(signup(user)),
    showModal: content => dispatch(showModal(content)),
    hideModal: () => dispatch(hideModal()),
    hideErrors: () => dispatch(hideErrors())
});

export default connect(mSTP, mDTP)(SessionForm);