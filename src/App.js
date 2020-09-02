import React, {lazy} from 'react';
import './App.css';
import {Route, Switch} from 'react-router';
import suspenseHoc from './hoc/suspenseHoc';

const BucketDetailPage = lazy(() => import('./pages/BucketDetailPage'));
const AuthPage = lazy(() => import('./pages/AuthPage'));
const HomePage = lazy(() => import('./pages/HomePage'));

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={suspenseHoc(AuthPage)} />
      <Route exact path="/home" component={suspenseHoc(HomePage)} />
      <Route path="/bucket/:id" component={suspenseHoc(BucketDetailPage)} />
    </Switch>
  );
};

export default App;
