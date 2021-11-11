import React from 'react';
import { Link } from 'react-router-dom';
import StoryNavContainer from '../nav/story_nav_container';

class StoryShow extends React.Component {
    constructor(props) {
        super(props);

        this.removeStory = this.removeStory.bind(this);
    }

    componentDidMount() {
        this.props.fetchStory(this.props.match.params.storyId)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.storyId !== this.props.match.params.storyId) {
           this.props.fetchStory(this.props.match.params.storyId) 
        }
    }

    formatDate = dateString => {
        const options = { month: "short", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    formatBody = body => {
        let storyArr = body.split('/n');
        let formattedArr = storyArr.map((para, idx) => (<p className="story-show-para" key={idx}>{para}</p>));
        return formattedArr
    }

    removeStory() {
        this.props.deleteStory(this.props.story.id);
        this.props.history.push(`/users/${this.props.currentUser.id}`);
    }

    render() {

        if (!this.props.story) {
            return null
        }

        const removeStoryBtn = this.props.currentUser.id === this.props.story.author_id ? (
            <button onClick={this.removeStory} id="delete-story-btn">Delete this story</button>
        ) : (<div></div>);

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
                            <h3 className="story-author-name"><Link to={`/users/${this.props.story.author.id}`} className="link-author-name">{this.props.story.author.full_name}</Link></h3>
                            <p className="story-date">{this.formatDate(this.props.story.created_at)}</p>
                        </div>
                        <div className="story-show-body">
                            {this.formatBody(this.props.story.body)}
                        </div>
                        {removeStoryBtn}
                    </div>
                </div>
            </div>
        )
    }

};

export default StoryShow;