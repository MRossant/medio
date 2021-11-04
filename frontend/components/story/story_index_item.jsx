import React from 'react';
import { Link } from 'react-router-dom';

const StoryIndexItem = props => {

    return (
        <li className="story-index-item">
            <p className="trending-num">{`0${props.num}`}</p>
            <div className="trending-index-info">
                <h3 className="trending-name"><i class="fas fa-user-circle" />{props.story.author.full_name}</h3>
                <h3 className="trending-title">{props.story.title}</h3>
                <p className="trending-date">{props.story.created_at}</p>
            </div>
        </li>
    )
};

export default StoryIndexItem;