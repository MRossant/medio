import React from 'react';
import {Link} from 'react-router-dom';

class MainNav extends React.Component {
    render() {
        const { currentUser } = this.props;
        
        const display = currentUser ? (
            <div>
                <p>Signed In</p>
                <button onClick={this.props.logout}>Sign Out</button>
            </div>
        ) : (
            <div className="main-nav-links">
                <Link to="#" id="nav-link-login" onClick={() => this.props.showModal('login')}>Sign In
                </Link>

                <button id="get-started-btn" onClick={() => this.props.showModal('signup')}>Get started</button>
            </div>
        )

        return (
            <div className="main-nav">
                <div className="main-nav-items">
                    <h1 id="main-title">Medio</h1>
                    {display}
                </div>
            </div>
        )
    }
};

export default MainNav