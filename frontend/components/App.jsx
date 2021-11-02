import React from 'react';
import LoginFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import {Route} from 'react-router-dom';
import SessionModal from './modal/session_modal';
import HomeContainer from './home/home_container';
import GreetingContainer from './greeting/greeting_container';

const App = () => (
    <div>
        {/* <header>
            <img src={MediumLogo} />
            <h1 id="main-title">Medio</h1>
            <GreetingContainer />
        </header> */}
        <SessionModal />
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/login" component={LoginFormContainer}/>
        <Route exact path="/signup" component={SignUpFormContainer}/>
    </div>
);

export default App;