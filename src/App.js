import {Provider} from 'react-redux';
import store from './redux/store';
import React from 'react';
import BottomMenuBar from './navigation/BottomMenuBar';
import Navigation from './navigation/';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
