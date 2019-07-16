import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from './PrivateRoute';

import Posts from '../components/Posts';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={() => (<h1>Home component</h1>)} />
      <PrivateRoute exact path="/posts" component={Posts} />
    </Switch>
  </BrowserRouter>
);

export default Routes;