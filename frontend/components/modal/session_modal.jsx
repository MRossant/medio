import React from 'react';
import { connect } from 'react-redux';
import SignUpFormContainer from '../session_form/signup_form_container';
import LoginFormContainer from '../session_form/login_form_container';
import { hideModal } from '../../actions/modal_actions';

const SessionModal = ({modal, hideModal}) => {

    if (!modal) {
        return null;
    }

    let component;
    switch(modal) {
        case "signup":
            component = <SignUpFormContainer />;
            break;
        case "login":
            component = <LoginFormContainer />;
            break;
        default:
            return null;
    }

    return (
        <div className="form-modal-screen" onClick={hideModal}>
            <div className="form-modal-content" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    )
};

const mSTP = state => {
    // debugger
    return {
    modal: state.modal.sessionModal
    }
};

const mDTP = dispatch => ({
    hideModal: () => dispatch(hideModal())
});

export default connect(mSTP, mDTP)(SessionModal);