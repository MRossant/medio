import React from 'react';
import TrendingIndexItem from './trending_index_item';

class TrendingIndex extends React.Component {

    trendingStories(stories) {
        return stories.slice(0, 6);
    }

    formatDate = dateString => {
        const options = { month: "short", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    render() {
        const stories = this.trendingStories(this.props.stories);

        return (
            <div className="trending-stories-container">
                <ul className="trending-stories-list">
                    {
                        stories.map((story, idx) => (
                            <TrendingIndexItem story={story} key={idx} num={idx+1} date={this.formatDate(story.created_at)}/>
                        ))
                    }
                </ul>
            </div>
        )

    }
};

export default TrendingIndex;