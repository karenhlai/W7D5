import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let preloadedState = undefined;

  //preloaded is passed in instead of _nullsession in reducer
  if (window.currentUser) {
    preloadedState = {
      session: {
        currentUser: window.currentUser //POJO with cU id, un, and email
      }
    };
  }


  const store = createStore(preloadedState);
  // const store = createStore();

  ReactDOM.render(<Root store={store} />, root);
})