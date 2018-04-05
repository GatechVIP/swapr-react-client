import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isLoggedIn } from '../views/Login';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        isLoggedIn() ? <Component {...props} /> : <Redirect to='/login' />
    )} />
);

export default PrivateRoute;
