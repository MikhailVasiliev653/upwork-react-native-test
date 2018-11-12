import React from 'react';
import {PersistGate} from 'redux-persist/lib/integration/react';
import reducer from './src/reducers';
import {applyMiddleware, createStore} from "redux";
import {persistStore} from "redux-persist";
import {Provider} from "react-redux";
import thunk from 'redux-thunk';
import Routes from "./src/components/Routes";
import {logger} from "redux-logger";

const store = createStore(
  reducer,
  __DEV__ ? applyMiddleware(thunk, logger) : applyMiddleware(thunk)
);

const persistor = persistStore(store);

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Routes/>
    </PersistGate>
  </Provider>
);

export default App;
