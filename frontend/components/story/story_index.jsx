import React from 'react';
import StoryIndexItem from './story_index_item';

class StoryIndex extends React.Component {

    trendingStories(stories) {
        return stories.slice(0, 7);
    }

    render() {
        const stories = this.trendingStories(this.props.stories);

        return (
            <div className="trending-stories-container">
                <ul className="trending-stories-list">
                    {
                        stories.map((story, idx) => (
                            <StoryIndexItem story={story} key={idx} num={idx+1}/>
                        ))
                    }
                </ul>
            </div>
        )

    }
};

export default StoryIndex;