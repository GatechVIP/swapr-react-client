import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './views/Dashboard';
import Home from './views/Home';
import Login from './views/Login';
import GradeAssignment from './views/GradeAssignment';
import PrivateRoute from './lib/PrivateRoute';
import SubmitAssignment from './views/SubmitAssignment';
//import PrivateRoute from './lib/PrivateRoute';

class Main extends Component {
    render() {
        return (
            <div className="Main">
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/gradeassignment' component={GradeAssignment}/>
                    <Route path='/dashboard' component={Dashboard}/>
                    <Route path='/submit' component={SubmitAssignment}/>
                </Switch>
            </div>
        );
    }
}

export default Main;
