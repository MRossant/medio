import React from 'react';
import StoryNavContainer from '../nav/story_nav_container';
import UserStoryIndexItem from './user_story_index_item';
import UserShowNavContainer from './user_show_nav_container';
import MainNavContainer from '../nav/main_nav_container';
import {Link} from 'react-router-dom';

class UserShow extends React.Component {

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId);
    }

    componentDidUpdate(prevProps) {
        console.log(prevProps)
        if (prevProps.match.params.userId !== this.props.match.params.userId || prevProps.user.stories !== this.props.user.stories) {
           this.props.fetchUser(this.props.match.params.userId) 
        }
    }

    render() {

        if (!this.props.user) {
            return null
        }

        // shows most recent written stories first
        const storiesArr = Object.values(this.props.user.stories).reverse();
        let switchNoStories;
        if (!this.props.currentUser || this.props.currentUser.id !== this.props.user.id) {
            switchNoStories = (<h1 className="no-stories">{this.props.user.full_name} has no stories.</h1>);
        } else if (this.props.currentUser.id === this.props.user.id) {
            switchNoStories = (
                <div>
                    <h1 className="no-stories">You have no stories...</h1>
                    <Link id="write-story-btn" to="/story/new">Write a Story</Link>
                </div>
            );
        }

        const display = storiesArr.length === 0 ? (
            <div>{switchNoStories}</div>
        ) : (
            <ul>
                {
                    storiesArr.map((story, idx) => (<UserStoryIndexItem key={idx} story={story} author={this.props.user}/>))
                }
            </ul>
        );

        return (
            <div>
                <UserShowNavContainer user={this.props.user}/>
                {display}
            </div>
        )
    }
};

export default UserShow;