import React from 'react';
import {Link} from 'react-router-dom';

class UserShowNav extends React.Component {

    toggleDrop() {
        if (!this.props.modal) {
            this.props.showModal('profile');
        } else {
            this.props.hideModal();
        }
    }

    render() {
        const { currentUser } = this.props;
        const { user } = this.props;

        let followBtn;
        if (!currentUser) {
            followBtn = (<p></p>);
        } else if (currentUser.id === user.id) {
            followBtn = (<button className="follow-user-btn">Follow</button>);
        }
        
        const leftNav = (
            <div className="user-show-left-nav">
                <Link to="/" id="user-show-logo-link">Medio</Link>
                <h1 id="user-show-author">{user.full_name}</h1>
                {followBtn}
            </div>
        );

        const rightNav = currentUser ? (
            <div className="user-profile-nav">
                <i className="fas fa-user-circle" onClick={() => this.toggleDrop()}/>
            </div>
        ) : (
            <div className="main-nav-links">
                <Link to="#" className="nav-link-login" onClick={() => this.props.showModal('login')}>Sign In
                </Link>

                <button className="get-started-btn" onClick={() => this.props.showModal('signup')}>Get started</button>
            </div> 
        );

        return (
            <div className="user-show-nav">
                {leftNav}
                {rightNav}
            </div>
        )
    }
};

export default UserShowNav;