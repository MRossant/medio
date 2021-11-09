import React from 'react';
import { Link } from 'react-router-dom';

const StoryIndexItem = props => {
    return (
        <li className="story-index-item">
            <div className="story-author-profile">
                <i className="fas fa-user-circle" />
                <Link to={`/users/${props.story.author.id}`} className="story-author-name">{props.story.author.full_name}</Link>
            </div>
            <Link to={`/stories/${props.story.id}`} id="story-title-link">{props.story.title}</Link>
            <span className="story-date">{props.date}</span>
        </li>
    )
};

export default StoryIndexItem;