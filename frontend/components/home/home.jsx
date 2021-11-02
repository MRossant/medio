import React from 'react';
import {Link} from 'react-router-dom';
import MainNavContainer from '../nav/main_nav_container';

class Home extends React.Component {

    // Add componentDidMount to fetch the stories

    render() {
        return (
            <div>
                <MainNavContainer />
            </div>
        )
    }
};

export default Home;