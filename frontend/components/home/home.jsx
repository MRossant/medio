import React from 'react';
import {Link} from 'react-router-dom';
import MainNavContainer from '../nav/main_nav_container';
import TrendingIndex from '../story/trending_index';
import StoryIndexContainer from '../story/story_index_container'
// import SplashPic from '../../../app/assets/images/splash-pic.jpg';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.checkCurrentUser = this.checkCurrentUser.bind(this);
    }

    // Add componentDidMount to fetch the stories
    componentDidMount() {
        this.props.fetchStories();
    }

    checkCurrentUser() {
        this.props.currentUser ? this.props.history.push('/story/new') : this.props.showModal("signup") 
    }

    render() {

        const recommended = (
            <div className="discover-container">
                <h3 className="discover-header">DISCOVER MORE OF WHAT MATTERS TO YOU</h3>
                <div className="discover-categories">
                    <button className="discover-tag">Self</button>
                    <button className="discover-tag">Relationships</button>
                    <button className="discover-tag">Data Science</button>
                    <button className="discover-tag">Programming</button>
                    <button className="discover-tag">Productivity</button>
                    <button className="discover-tag">Javascript</button>
                    <button className="discover-tag">Machine Learning</button>
                    <button className="discover-tag">Politics</button>
                    <button className="discover-tag">Health</button>
                </div>
                <div className="discover-footer">
                    <p className="discover-footer-tagline">DISCOVER MORE OF WHAT I CAN DO</p>
                    <div className="discover-links-container">
                        <a href="https://www.linkedin.com/in/matteo-rossant-26ab65106/" className="discover-links">LinkedIn</a>
                        <a href="https://github.com/MRossant" className="discover-links">GitHub</a>
                    </div>
                </div>
            </div>
        )

        return (
            <div>
                <MainNavContainer />
                <div id="splash-background" style={{backgroundImage: `url(${window.splash})`}}>
                    <div id="splash-container">
                        <h1 id="splash-text">Medio is a place to write, read, and connect.</h1>
                        <button id="start-writing-btn" onClick={this.checkCurrentUser}>Start Writing</button>
                    </div>
                </div>
                <div id="trending-header">
                    <i className="fas fa-bolt"></i>
                    <h3 id="trending-headline">TRENDING ON MEDIO</h3>
                </div>
                <div id="trending-stories">
                    <TrendingIndex stories={this.props.stories}/>
                </div>
                <div id="bottom-splash">
                    <div id="story-index">
                        <StoryIndexContainer 
                        stories={this.props.stories} 
                        currentUser={this.props.currentUser} 
                        showModal={this.props.showModal}/>
                    </div>
                    {recommended}
                </div>
            </div>
        )
    }
};

export default Home;