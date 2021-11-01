import React from 'react';
import LoginFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import {Route} from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';

const App = () => (
    <div>
        <header>
            <h1>Medio</h1>
            <GreetingContainer />
        </header>
        <Route path="/login" component={LoginFormContainer}/>
        <Route path="/signup" component={SignUpFormContainer}/>
    </div>
);

export default App;