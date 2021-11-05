import React from 'react';
import { Link } from 'react-router-dom';
import StoryNavContainer from '../nav/story_nav_container';

class StoryShow extends React.Component {

    // componentDidMount() {
    //     this.props.fetchStory(this.props.story)
    // }

    formatDate = dateString => {
        const options = { month: "short", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    render() {

        const leftNav = (
            <div className="story-author-nav">
                <h1>{this.props.story.author.full_name}</h1>
                <button className="follow-user-btn">Follow</button>
            </div>
        )

        return (
            <div>
                <StoryNavContainer story={this.props.story} />
                <div className="story-show-container">
                    {leftNav}
                    <div className="main-story-container">
                        <h1 className="story-show-title">{this.props.story.title}</h1>
                        <div className="story-author-info">
                            <i className="fas fa-user-circle"></i>
                            <h3 className="story-author-name">{this.props.story.author.full_name}</h3>
                            <p className="story-date">{this.formatDate(this.props.story.created_at)}</p>
                        </div>
                        <p className="story-show-body">{this.props.story.body}</p>
                    </div>
                </div>
            </div>
        )
    }

};

export default StoryShow;