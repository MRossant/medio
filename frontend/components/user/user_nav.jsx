import React from 'react';
import { Link } from 'react-router-dom';

class UserNav extends React.Component {

    render() {
    
        return (
            // <div className="user-dropdown-container">
            //     <button className="dropdown-toggle" onClick={() => this.props.showModal('profile')}>{userProfile}</button>
                <div className="dropdown">
                    <ul>
                        <li className="dropdown-item">
                            <Link to="/">{this.props.currentUser.full_name}</Link>
                            {this.props.currentUser.handle}
                        </li>
                        <li className="dropdown-item">
                            <Link to="/story/new">Write A Story</Link>
                        </li>
                        <li className="dropdown-item">
                            <Link to="/story/saves">Saves</Link>
                        </li>
                        <li className="dropdown-item">
                            <Link to="/" onClick={this.props.logout}>Sign Out</Link>
                        </li>
                    </ul>
                </div>
            // </div>
        )
    }
};

export default UserNav;