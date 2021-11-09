import React from 'react';
import {Link} from 'react-router-dom';
import MainNavContainer from '../nav/main_nav_container';
import TrendingIndex from '../story/trending_index';
import StoryIndexContainer from '../story/story_index_container';
// import SplashPic from '../../../app/assets/images/splash-pic.jpg';

class Home extends React.Component {

    // Add componentDidMount to fetch the stories
    componentDidMount() {
        this.props.fetchStories();
    }

    render() {

        return (
            <div>
                <MainNavContainer />
                <div id="splash-background" style={{backgroundImage: `url(${window.splash})`}}>
                    <div id="splash-container">
                        <h1 id="splash-text">Medio is a place to write, read, and connect.</h1>
                        <button id="start-writing-btn" onClick={() => this.props.showModal("signup")}>Start Writing</button>
                    </div>
                </div>
                <div id="trending-header">
                    <i className="fas fa-bolt"></i>
                    <h3 id="trending-headline">TRENDING ON MEDIO</h3>
                </div>
                <div id="trending-stories">
                    <TrendingIndex stories={this.props.stories}/>
                </div>
                <div id="story-index">
                    <StoryIndexContainer 
                    stories={this.props.stories} 
                    currentUser={this.props.currentUser} 
                    showModal={this.props.showModal}/>
                </div>
            </div>
        )
    }
};

export default Home;