import { combineReducers } from 'redux';
import multireducer from 'multireducer';
import { routerReducer } from 'react-router-redux';
import {reducer as reduxAsyncConnect} from 'redux-connect';

import blog from './blog';

export default combineReducers({
  routing: routerReducer,
  reduxAsyncConnect,
  blog
});
