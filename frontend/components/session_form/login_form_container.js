import {login} from '../../actions/session';
import { connect } from 'react-redux';
import SessionForm from './session_form';

const mSTP = state => ({
    errors: state.errors,
    formType: 'login'
});

const mDTP = dispatch => ({
    processForm: user => dispatch(login(user))
})

export default connect(mSTP, mDTP)(SessionForm);