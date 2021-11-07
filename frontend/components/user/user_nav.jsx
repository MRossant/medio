import React from 'react';
import { Link } from 'react-router-dom';

class UserNav extends React.Component {

    render() {
    
        return (
            <div className="dropdown">
                <ul className="dropdown-item-list">
                    <li className="dropdown-item user-info">
                        <div className="dropdown-user-info">
                            <Link className="dropdown-link" to="/">{this.props.currentUser.full_name}</Link>
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
                        <Link className="dropdown-link" to="/" onClick={this.props.logout}>Sign Out</Link>
                    </li>
                </ul>
            </div>
        )
    }
};

export default UserNav;