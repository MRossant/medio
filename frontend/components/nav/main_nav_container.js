import { connect } from 'react-redux';
import MainNav from './main_nav';
import {logout} from '../../actions/session';
import { showModal, hideModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

const mSTP = ({ session, entities: { users }, modal}) => ({
    currentUser: users[session.id],
    modal: modal.sessionModal
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    showModal: content => dispatch(showModal(content)),
    hideModal: () => dispatch(hideModal())
});

export default withRouter(connect(mSTP, mDTP)(MainNav));