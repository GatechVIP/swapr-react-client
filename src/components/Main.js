import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './views/Dashboard';
import Home from './views/Home';
import Login from './views/Login';
import PrivateRoute from './lib/PrivateRoute';

class Main extends Component {
    render() {
        return (
            <div className="Main">
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/login' component={Login}/>
                </Switch>
            </div>
        );
    }
}

export default Main;
