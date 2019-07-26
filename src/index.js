import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import rootReducer from './store/reducers';
import { theme } from './_settings/style-theme';
import { ThemeProvider } from 'styled-components';
import Navigation from './routes';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(persistedReducer);
let persistor = persistStore(store);

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation />
      </PersistGate>
    </ThemeProvider>
  </Provider>
);

export default App;
