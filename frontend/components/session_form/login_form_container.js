import {login, hideErrors} from '../../actions/session';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { hideModal, showModal } from '../../actions/modal_actions';

const mSTP = state => ({
    errors: state.errors.session,
    modal: state.modal.sessionModal,
    formType: 'login'
});

const mDTP = dispatch => ({
    action: user => dispatch(login(user)),
    login: user => dispatch(login(user)),
    showModal: content => dispatch(showModal(content)),
    hideModal: () => dispatch(hideModal()),
    hideErrors: () => dispatch(hideErrors())
})

export default connect(mSTP, mDTP)(SessionForm);