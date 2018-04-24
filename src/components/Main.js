import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
//import { connect } from 'react-redux';

import { Dashboard } from './views/Dashboard';
import { Login } from './views/Login';
import { GradeAssignment } from './views/GradeAssignment';
import { PrivateRoute } from './lib/helpers/PrivateRoute';
import { SubmitAssignment } from './views/SubmitAssignment';

class Main extends Component {
    render() {
        return (
            <div className="Main">
                <Switch>
                    <PrivateRoute exact path='/' component={Dashboard}/>
                    <PrivateRoute exact path='/gradeassignment' component={GradeAssignment}/>
                    <PrivateRoute exact path='/submit' component={SubmitAssignment}/>
                    <Route path='/login' component={Login}/>
                </Switch>
            </div>
        );
    }
}

//const connectedMain = connect()(Main);
//export { connectedMain as Main };
export { Main };
