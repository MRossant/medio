import React from 'react';
import { Link } from 'react-router-dom';

const UserStoryIndexItem = props => {

    const formatBody = body => {
        let storyArr = body.split('/n');
        let formattedArr = storyArr.map((para, idx) => (<p className="story-show-para" key={idx}>{para}</p>));
        return formattedArr.slice(0, 2);
    }

    const formatDate = dateString => {
        const options = { month: "short", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    return (
        <div className="user-show-article">
            <span className="article-date">{formatDate(props.story.created_at)}</span>
            <Link className="article-title" to={`/stories/${props.story.id}`}>{props.story.title}</Link>
            {formatBody(props.story.body)}
        </div>
    )
};

export default UserStoryIndexItem;