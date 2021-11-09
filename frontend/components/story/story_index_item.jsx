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
            bookmarked: false,
        }

        this.swapBookmark = this.swapBookmark.bind(this);
    }

    // lifecycle method that checks if story has been previously bookmarked by the current user
    // Grab current user's id, fetch all users, and key in users object to grab all info from that user. 
    // Check if any bookmarks from that user matches the current story's id. 
    // componentDidMount
    // componentDidUpdate
    componentDidMount() {

        if (!this.props.currentUser) {
            return null
        }

        const bookmarksArr = Object.values(this.props.currentUser.bookmarks);

        for (let i = 0; i < bookmarksArr.length; i++) {
            let bookmark = bookmarksArr[i];

            if (bookmark.bookmarked_story_id === this.props.story.id) {
                this.setState({bookmarked: true})
            }
        }
    }

    componentDidUpdate(prevProps, prevState) {

    }

    swapBookmark() {
        if (!this.props.currentUser) {
            this.props.showModal('signup')
            return
        }

        if (!this.state.bookmarked) {
            const bookmark = {bookmarker_id: this.props.currentUser.id, bookmarked_story_id: this.props.story.id}
            this.props.postBookmark(bookmark)
            this.setState({bookmarked: true})
        } else {

        }
    }


    render() {

        console.log(this.props.currentUser)


        const bookmark = this.state.bookmarked ? (
            <i className="fas fa-bookmark" onClick={() => this.swapBookmark()}/>
        ) : (
            <i className="far fa-bookmark" onClick={() => this.swapBookmark()}/>
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