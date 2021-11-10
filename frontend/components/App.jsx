import React from 'react';
import LoginFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import {Route, Switch} from 'react-router-dom';
import SessionModal from './modal/session_modal';
import UserProfileModal from './modal/user_profile_modal';
import HomeContainer from './home/home_container';
import GreetingContainer from './greeting/greeting_container';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import StoryShowContainer from './story/story_show_container';
import StoryFormContainer from './story/story_form_container';
import UserShowContainer from './user/user_show_container';
import BookmarkIndexContainer from './bookmark/bookmark_index_container';
import NotFound from './not_found/not_found';

const App = () => (
    <div>
        <SessionModal />
        <UserProfileModal />
        <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route exact path="/login" component={LoginFormContainer}/>
            <Route exact path="/signup" component={SignUpFormContainer}/>
            <Route exact path="/stories/:storyId" component={StoryShowContainer}/>
            <Route exact path="/users/:userId" component={UserShowContainer}/>
            <ProtectedRoute exact path="/story/new" component={StoryFormContainer}/>
            <Route exact path="/story/saves" component={BookmarkIndexContainer}/>
            <Route exact component={NotFound}/>
        </Switch>
    </div>
);

export default App;