import React from 'react';
import { Link } from 'react-router-dom';

const StoryIndexItem = props => {

    return (
        <li className="story-index-item">
            <p className="trending-num">{`0${props.num}`}</p>
            <div className="trending-index-info">
                <div className="trending-profile">
                    <i class="fas fa-user-circle"></i>
                    <h3 className="trending-name">{props.story.author.full_name}</h3>
                </div>
                <h3 className="trending-title">{props.story.title}</h3>
                <p className="trending-date">{props.date}</p>
            </div>
        </li>
    )
};

export default StoryIndexItem;