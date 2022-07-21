import {applyMiddleware} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import {composeWithDevTools} from 'redux-devtools-extension';

import rootReducer from './reducers';
import artReducer from './reducers/artReducer';

const middleware = composeWithDevTools(applyMiddleware(promise, thunk));

// const store = createStore(rootReducer, middleware);

const store = configureStore({reducer: {artReducer}}, middleware);
export default store;
