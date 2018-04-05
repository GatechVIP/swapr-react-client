import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './views/Dashboard';
import Home from './views/Home';
import Login from './views/Login';
<<<<<<< HEAD
import GradeAssignment from './views/GradeAssignment';
=======
import PrivateRoute from './lib/PrivateRoute';
>>>>>>> 2e38ed771800515cf200a0c770156bbd6439d928

class Main extends Component {
    render() {
        return (
            <div className="Main">
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/gradeassignment' component={GradeAssignment}/>
                </Switch>
            </div>
        );
    }
}

export default Main;
