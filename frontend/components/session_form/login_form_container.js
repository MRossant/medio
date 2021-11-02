import {login} from '../../actions/session';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { hideModal, showModal } from '../../actions/modal_actions';

const mSTP = state => ({
    errors: state.errors,
    formType: 'login'
});

const mDTP = dispatch => ({
    action: user => dispatch(login(user)),
    showModal: content => dispatch(showModal(content)),
    hideModal: () => dispatch(hideModal())
})

export default connect(mSTP, mDTP)(SessionForm);