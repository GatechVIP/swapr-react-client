import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import GradeAssignment from './views/GradeAssignment';

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
