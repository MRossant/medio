import React from 'react';
import { Link } from 'react-router-dom';

class BookmarkIndexItem extends React.Component {

    formatDate = dateString => {
        const options = { month: "short", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    formatBody = body => {
        let storyArr = body.split('/n');
        let formattedArr = storyArr.map((para, idx) => (<p className="story-show-para" key={idx}>{para}</p>));
        return formattedArr[0];
    }

    render() {
        
        const story = this.props.fetchStory(this.props.bookmark.bookmarked_story_id);

        return (
            <div className="bookmarked-article">
                
            </div>
        )



    }
}