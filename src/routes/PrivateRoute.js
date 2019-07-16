import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from '../authentication';

const PrivateRoute = ({ component: Component, ...args }) => (
  <Route {...args} render={props => (
    isAuthenticated() ? (
      <Component {...props} />
    ) : (
        /**
         * @state: { from: props.location },
         * Necessário para não perder o histórico da navegação no browser
         */
        <Redirect to={{ pathName: '/', state: { from: props.location } }} />
      )
  )} />
);

export default PrivateRoute;