import React from 'react';
import { Link } from 'react-router-dom';

class UserNav extends React.Component {
    constructor(props) {
        super(props);

        this.signOut = this.signOut.bind(this);
    }

    signOut() {
        this.props.hideModal();
        this.props.logout();
    }

    render() {
    
        return (
            <div className="dropdown">
                <ul className="dropdown-item-list">
                    <li className="dropdown-item user-info">
                        <div className="dropdown-user-info">
                            <Link className="dropdown-link" to={`/users/${this.props.currentUser.id}`}>{this.props.currentUser.full_name}</Link>
                            <span>{this.props.currentUser.handle}</span>
                        </div>
                    </li>
                    <li className="dropdown-item">
                        <Link className="dropdown-link" to="/story/new">Write A Story</Link>
                    </li>
                    <li className="dropdown-item">
                        <Link className="dropdown-link" to="/story/saves">Saves</Link>
                    </li>
                    <li className="dropdown-item">
                        <Link className="dropdown-link signout" to="/" onClick={this.signOut}>Sign Out</Link>
                    </li>
                </ul>
            </div>
        )
    }
};

export default UserNav;