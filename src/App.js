import {Provider} from 'react-redux';
import store, {persistor} from './redux/store';
import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import Navigation from './navigation/';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
