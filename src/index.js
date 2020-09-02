import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {store, persistor, history} from './services/store';
import {ThemeProvider} from '@material-ui/core/styles';
import {createMuiTheme} from '@material-ui/core';

const lightTheme = createMuiTheme({
  palette: {
    primary: {main: '#F6A61E'},
    secondary: {main: 'rgba(0, 0, 0, 0.36)'},
    background: {
      default: '#FFFFFF',
    },
    accent: '#212A39',
    text: {
      primary: 'rgba(33, 42, 57, 0.87)',
      secondary: 'rgba(33, 42, 57, 0.5)',
    },
  },
  spacing: 2,
  typography: {
    fontFamily: ['Karla'].join(','),
  },
});

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<div>Loading</div>} persistor={persistor}>
      <ThemeProvider theme={lightTheme}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </ThemeProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
