import React from 'react';
import {Link} from 'react-router-dom';
import MainNavContainer from '../nav/main_nav_container';
import BookmarkIndexItem from './bookmark_index_item';

class BookmarkIndex extends React.Component {

    componentDidMount() {
        this.props.fetchStories();
    }

    render() {
        const bookmarkArr = Object.values(this.props.currentUser.bookmarks);
        const stories = this.props.stories

        return (
            
            <div>
                <div>
                    <MainNavContainer currentUser={this.props.currentUser}/>
                    <span className="current-user-floater">{this.props.currentUser.full_name}</span>
                </div>
                <div className="bookmark-index-container">
                    <h1 id="bookmark-index-header">Reading List</h1>
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

