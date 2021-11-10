import ReactDOM from 'react-dom';
import React from 'react';
import configureStore from './store/store';
import Root from './components/root';
import { login, signup } from './actions/session';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  let preloadedState = undefined;
  if (window.currentUser) {
    preloadedState = {
      entities: {users: {[window.currentUser.id]: window.currentUser}},
      session: {id: window.currentUser.id}
    };
  }

  const store = configureStore(preloadedState);

  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.signup = signup;
  window.login = login;
  ReactDOM.render(<Root store={store}/>, root);
});