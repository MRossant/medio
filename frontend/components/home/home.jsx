import React from 'react';
import {Link} from 'react-router-dom';
import MainNavContainer from '../nav/main_nav_container';
// import SplashPic from '../../../app/assets/images/splash-pic.jpg';

class Home extends React.Component {

    // Add componentDidMount to fetch the stories

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
            </div>
        )
    }
};

export default Home;