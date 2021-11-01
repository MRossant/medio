import { signup } from "../../actions/session";
import { connect } from "react-redux";
import SessionForm from "./session_form";

const mSTP = state => ({
    errors: state.errors,
    formType: 'signup'
});

const mDTP = dispatch => ({
    processForm: user => dispatch(signup(user))
});

export default connect(mSTP, mDTP)(SessionForm);