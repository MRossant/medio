import React from 'react';
import { Link } from 'react-router-dom';

class BookmarkIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.update = this.update.bind(this)
    }
    
    update() {
        this.props.deleteBookmark(this.props.bookmark.id)
        window.location.reload(false);
    }


    formatDate = dateString => {
        const options = { month: "short", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    formatBody = body => {
        let storyArr = body.split('/n');
        let formattedArr = storyArr.map((para, idx) => (<p className="bookmark-story-para" key={idx}>{para}</p>));
        return formattedArr[0];
    }

    render() {
        
        const story = this.props.stories[this.props.bookmark.bookmarked_story_id];
        
        if (!story) {
            return null
        }

        const author = story.author

        return (
            <div className="bookmarked-index-item">
                <div className="bookmarked-item-info">
                    <Link className="bookmark-author" to={`/users/${author.id}`}>{author.full_name}</Link>
                    <span className="bookmark-date">{this.formatDate(story.created_at)}</span>
                </div>
                <Link className="bookmark-title" to={`/stories/${story.id}`}>{story.title}</Link>
                <Link className="bookmark-body" to={`/stories/${story.id}`}>{this.formatBody(story.body)}</Link>
                <div className="bookmark-footer">
                    <Link className="bookmark-read-more" to={`/stories/${story.id}`}>Read more</Link>
                    <span onClick={this.update} className="bookmark-remove">Remove</span>
                </div>
            </div>
        )
    }
};

export default BookmarkIndexItem;

