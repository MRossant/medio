import React from 'react';
import {Link} from 'react-router-dom';
import MainNavContainer from '../nav/main_nav_container';

class BookmarkIndex extends React.Component {

    render() {

        const bookmarkArr = Object.values(this.props.currentUser.bookmarks)

        return (
            <div>
                <MainNavContainer />
                <div className="stories-index-container">
                    <ul className="stories-index-list">
                        {
                            bookmarkArr.map((bookmark, idx) => (
                                <BookmarkIndexItem 
                                bookmark={bookmark} 
                                key={idx}
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

