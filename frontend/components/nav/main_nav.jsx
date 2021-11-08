import React from 'react';
import {Link} from 'react-router-dom';
import UserNavContainer from '../user/user_nav_container';

class MainNav extends React.Component {

    toggleDrop() {
        if (!this.props.modal) {
            this.props.showModal('profile');
        } else {
            this.props.hideModal();
        }
    }

    render() {

        const { currentUser } = this.props;
        
        const display = currentUser ? (
            <div className="user-profile-nav">
                <i className="fas fa-user-circle" onClick={() => this.toggleDrop()}/>
            </div>
        ) : (
            <div className="main-nav-links">
                <Link to="#" className="nav-link-login" onClick={() => this.props.showModal('login')}>Sign In
                </Link>

                <button className="get-started-btn" onClick={() => this.props.showModal('signup')}>Get started</button>
            </div>
        )

        return (
            <div className="main-nav">
                <h1 id="main-title"><Link to="/" className="logo-link">Medio</Link></h1>
                <div className="session-items">
                    {display}
                </div>
            </div>
        )
    }
};

export default MainNav