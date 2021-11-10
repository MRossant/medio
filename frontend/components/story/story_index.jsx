import React from 'react';
import StoryIndexItem from './story_index_item';

class StoryIndex extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentUser: this.props.currentUser
        }
    }

    componentDidMount() {
        if (!this.props.currentUser) {
            return null
        }

        this.setState({currentUser: this.props.currentUser})
    }

    componentDidUpdate(prevProps) {
        //login user
        if (!prevProps.currentUser && this.props.currentUser) {
            this.setState({currentUser: this.props.currentUser})
        }

        //logout user
        if (prevProps.currentUser && !this.props.currentUser) {
            this.setState({currentUser: null})
        }
    }

    formatDate = dateString => {
        const options = { month: "short", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    shuffle = array => {
        let currentIdx = array.length, randomIdx;

        while (currentIdx != 0) {

            randomIdx = Math.floor(Math.random() * currentIdx);
            currentIdx--;

            [array[currentIdx], array[randomIdx]] = [
            array[randomIdx], array[currentIdx]];
        }

        return array;
    }

    render() {
        // const shuffledArr = this.shuffle(this.props.stories);

        return (
            <div className="stories-index-container">
                <ul className="stories-index-list">
                    {
                       this.props.stories.map((story, idx) => (
                            <StoryIndexItem 
                            story={story} 
                            key={idx} 
                            date={this.formatDate(story.created_at)}
                            currentUser={this.state.currentUser}
                            postBookmark={this.props.postBookmark}
                            deleteBookmark={this.props.deleteBookmark}
                            showModal={this.props.showModal}
                            fetchUsers={this.props.fetchUsers}
                            />
                        ))
                    }
                </ul>
            </div>
        )
    }
};

export default StoryIndex;