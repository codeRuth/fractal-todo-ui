import {applyMiddleware, compose, createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import {routerMiddleware} from 'connected-react-router';
import {createBrowserHistory} from 'history';
import storage from 'redux-persist/lib/storage';
import reducer from './reducers';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['router'],
};

const history = createBrowserHistory();

const routeMiddleware = routerMiddleware(history);
const middleware = [thunk, routeMiddleware];
const composeEnhancers = compose;
const customPersistReducer = persistReducer(persistConfig, reducer(history));

const store = createStore(
  customPersistReducer,
  composeEnhancers(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__({trace: true})
  )
);

const persistor = persistStore(store);

export {store, persistor, history};
