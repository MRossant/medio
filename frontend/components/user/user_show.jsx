import React from 'react';
import StoryNavContainer from '../nav/story_nav_container';
import UserStoryIndexItem from './user_story_index_item';
import UserShowNavContainer from './user_show_nav_container';
import MainNavContainer from '../nav/main_nav_container';

class UserShow extends React.Component {

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.user.stories !== this.props.user.stories) {
           this.props.fetchUser(this.props.match.params.userId) 
        }
    }

    render() {

        if (!this.props.user) {
            return null
        }
        
        // shows most recent written stories first
        const storiesArr = Object.values(this.props.user.stories).reverse();

        const display = storiesArr.length === 0 ? (
            <h1 className="no-stories">{this.props.user.full_name} has no stories...</h1>
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