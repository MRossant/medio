import React from 'react';
import {Link} from 'react-router-dom';
import MainNavContainer from '../nav/main_nav_container';
import BookmarkIndexItem from './bookmark_index_item';

class BookmarkIndex extends React.Component {
    constructor(props) {
        super(props); 
        
        this.state = {
            bookmarks: this.props.currentUser.bookmarks
        }
    }

    componentDidMount() {
        this.props.fetchStories();
        this.props.fetchUser(this.props.currentUser.id)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentUser.bookmarks !== this.props.currentUser.bookmarks) {
            this.setState({bookmarks: this.props.currentUser.bookmarks})
        }
    }

    render() {
        const bookmarkArr = Object.values(this.props.currentUser.bookmarks);
        const stories = this.props.stories
        const emptyBookmarks = bookmarkArr.length === 0 ? (
            <h3 className="no-bookmarks">You have no bookmarks...</h3>
        ) : (
            <div></div>
        );

        return (
            
            <div>
                <div>
                    <MainNavContainer currentUser={this.props.currentUser}/>
                    <span className="current-user-floater">{this.props.currentUser.full_name}</span>
                </div>
                <div className="bookmark-index-container">
                    <h1 id="bookmark-index-header">Reading List</h1>
                    {emptyBookmarks}
                    <ul className="bookmark-index-list">
                        {
                            bookmarkArr.map((bookmark, idx) => (
                                <BookmarkIndexItem 
                                bookmark={bookmark} 
                                key={idx}
                                fetchStory={this.props.fetchStory}
                                fetchUser={this.props.fetchUser}
                                stories={stories}
                                />
                                ))
                            }
                    </ul>
                </div>
            </div>
        )
    }
};

export default BookmarkIndex;

