import { combineReducers } from 'redux';

import artReducer from './artReducer';

const reducers = {
  artReducer: artReducer
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
