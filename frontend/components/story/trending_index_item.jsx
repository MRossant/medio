import React from 'react';
import { Link } from 'react-router-dom';

const TrendingIndexItem = props => {

    return (
        <li className="trending-index-item">
            <p className="trending-num">{`0${props.num}`}</p>
            <div className="trending-index-info">
                <div className="trending-profile">
                    <i className="fas fa-user-circle"></i>
                    <h3 className="trending-name">{props.story.author.full_name}</h3>
                </div>
                <h3 className="trending-title"><Link id="trending-title-link" to={`/stories/${props.story.id}`}>{props.story.title}</Link></h3>
                <p className="trending-date">{props.date}</p>
            </div>
        </li>
    )
};

export default TrendingIndexItem;