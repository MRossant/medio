import React from 'react';
import StoryIndexItem from './story_index_item';

class StoryIndex extends React.Component {

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

        const shuffledArr = this.shuffle(this.props.stories);

        return (
            <div className="stories-index-container">
                <ul className="stories-index-list">
                    {
                        shuffledArr.map((story, idx) => (
                            <StoryIndexItem story={story} key={idx} date={this.formatDate(story.created_at)}/>
                        ))
                    }
                </ul>
            </div>
        )
    }
};

export default StoryIndex;