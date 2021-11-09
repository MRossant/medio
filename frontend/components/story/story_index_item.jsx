import React from 'react';
import { Link } from 'react-router-dom';
import { 
    postBookmark, 
    deleteBookmark 
} from '../../actions/bookmark_actions';

class StoryIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            bookmarked: false
        }
    }

    render() {
        const bookmark = this.state.bookmarked ? (
            <i class="fas fa-bookmark" />
        ) : (
            <i className="far fa-bookmark" />
        );

        return (
            <li className="story-index-item">
                <div className="story-author-profile">
                    <i className="fas fa-user-circle" />
                    <Link to={`/users/${this.props.story.author.id}`} className="story-author-name">{this.props.story.author.full_name}</Link>
                </div>
                <Link to={`/stories/${this.props.story.id}`} id="story-title-link">{this.props.story.title}</Link>
                <div className="story-footer">
                    <span className="story-date">{this.props.date}</span>
                    {bookmark}
                </div>
            </li>
        )
    }
};

export default StoryIndexItem;