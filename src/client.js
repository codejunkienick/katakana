/**
 * THIS IS THE ENTRY POINT FOR THE CLIENT, JUST LIKE server.js IS THE ENTRY POINT FOR THE SERVER.
 */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import ga from 'react-ga';
import createStore from './redux/create';
import ApiClient from './helpers/ApiClient';
import io from 'socket.io-client';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { ReduxAsyncConnect } from 'redux-connect';
import useScroll from 'scroll-behavior/lib/useStandardScroll';
import getRoutes from './routes';

const client = new ApiClient();
const _browserHistory = useScroll(() => browserHistory)();
const dest = document.getElementById('content');
const store = createStore(_browserHistory, client, window.__data);
const history = syncHistoryWithStore(_browserHistory, store);

require('../static/fonts/lato/scss/lato.scss');

const asci = `
______ ____________________________ _____________   ________ 
___  //_/__    |__  __/__    |__  //_/__    |__  | / /__    |
__  ,<  __  /| |_  /  __  /| |_  ,<  __  /| |_   |/ /__  /| |
_  /| | _  ___ |  /   _  ___ |  /| | _  ___ |  /|  / _  ___ |
/_/ |_| /_/  |_/_/    /_/  |_/_/ |_| /_/  |_/_/ |_/  /_/  |_|
`;
console.log(asci);
console.log("Если вы хотите вступить в группу разработчиков KATAKANA, обращайтесь по адрессу mail@katakana.xyz");
console.log("Если вам интересна не только сгенерированная верстка, приглашаю вас посетить репозиторий на github: http://github.com/codejunkienick/katakana");
                                                             

if (process.env.NODE_ENV === 'production') {
  ga.initialize('UA-78109937-1');
}

function logPageView() {
  if (process.env.NODE_ENV === 'production') {
    ga.pageview(window.location.pathname);
  }
}

function initSocket() {
  const socket = io('', {path: '/ws'});
  return socket;
}

//global.socket = initSocket();

const component = (
  <Router render={(props) =>
        <ReduxAsyncConnect {...props} helpers={{client}} filter={item => !item.deferred} />
      } history={history} onUpdate={logPageView}>
    {getRoutes(store)}
  </Router>
);

ReactDOM.render(
  <Provider store={store} key="provider">
    {component}
  </Provider>,
  dest
);

if (process.env.NODE_ENV !== 'production') {
  window.React = React; // enable debugger

  if (!dest || !dest.firstChild || !dest.firstChild.attributes || !dest.firstChild.attributes['data-react-checksum']) {
    console.error('Server-side React render was discarded. Make sure that your initial render does not contain any client-side code.');
  }
}

if (__DEVTOOLS__ && !window.devToolsExtension) {
  const DevTools = require('./containers/DevTools/DevTools');
  ReactDOM.render(
    <Provider store={store} key="provider">
      <div>
        {component}
        <DevTools />
      </div>
    </Provider>,
    dest
  );
}
