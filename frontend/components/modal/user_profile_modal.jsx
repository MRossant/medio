import React from 'react';
import { connect } from 'react-redux';
import UserNavContainer from '../user/user_nav_container';
import { hideModal } from '../../actions/modal_actions';

const UserProfileModal = ({modal, hideModal}) => {

    if (!modal) {
        return null;
    }

    let component;
    switch(modal) {
        case "profile":
            component = <UserNavContainer />;
            break;
        default:
            return null;
    }

    return (
        <div className="user-modal-screen" onClick={hideModal}>
            <div className="user-modal-content" onClick={e => e.stopPropagation()}>
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

export default connect(mSTP, mDTP)(UserProfileModal);