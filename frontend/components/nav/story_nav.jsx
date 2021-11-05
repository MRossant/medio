import React from 'react';
import { Link } from 'react-router-dom';

class StoryNav extends React.Component {

    render() {

        const storyAuthor = this.props.story.author

        const display = this.props.currentUser ? (
            <div>
                <p>Signed In</p>
                <button onClick={this.props.logout}>Sign Out</button>
            </div>
        ) : (
            <div>
                <Link to="#" className="nav-link-login" onClick={() => this.props.showModal('login')}>Sign In
                </Link>

                <button className="get-started-btn" onClick={() => this.props.showModal('signup')}>Get started</button>
                <Link to="/" id="logo-link">Medio</Link>
            </div>
        )

        return (
            <div className="main-story-nav-container">
                <div className="story-nav">
                    <h1 className="author-title">{storyAuthor.full_name}</h1>
                    <div className="session-items">
                        {display}
                    </div>
                </div>
            </div>
        )
    }
};

export default StoryNav;