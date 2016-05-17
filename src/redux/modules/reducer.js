import { combineReducers } from 'redux';
import multireducer from 'multireducer';
import { routerReducer } from 'react-router-redux';
import {reducer as reduxAsyncConnect} from 'redux-connect';

import auth from './auth';
import info from './info';

export default combineReducers({
  routing: routerReducer,
  reduxAsyncConnect,
  auth,
  info,
});
