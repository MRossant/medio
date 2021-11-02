import { connect } from 'react-redux';
import MainNav from './main_nav';
import {logout} from '../../actions/session';
import { showModal } from '../../actions/modal_actions';

const mSTP = ({ session, entities: { users } }) => ({
    currentUser: users[session.id]
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    showModal: content => dispatch(showModal(content))
});

export default connect(mSTP, mDTP)(MainNav);