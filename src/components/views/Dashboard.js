import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ToDoAssignments from '../dashboard/ToDoAssignments';
import CompletedAssignments from '../dashboard/CompletedAssignments';
import Grades from '../dashboard/Grades';
import '../stylesheets/index.css';

/*import React from 'react';

const Home = () => (
    <div>
        <h1>Hello, Welcome to SWAPR 2211</h1>
    </div>
);

export default Home;
*/
class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            todolist:[],
            completedlist:[],
        }
    }

    getTodo() {
        //Ajax api call
        return;
    }

    getCompleted() {
        //get
        return;
    }

    componentWillMount() {
        //this will call the getter methods
        //getTodo();
        //getCompleted();
    }
    
    // getGrades() {
    //             var gradesList = fetch('http://swapr-dev.vip.gatech.edu/api/grades')
    //       .then(function(response) {
    //         return response.json();
    //       })
    //       .then(function(myJson) {
    //         console.log(myJson);
    //       });
    // }

    render() {
        return(
            <div className="main-page container">
                <div className="row">
                    <div className="col-lg-9">
                        <div className="row justify-content-md-center" id="header"><h1 id="dashboard-title">Dashboard</h1></div>
                        <div className = "row justify-content-md-center">
                            <ToDoAssignments style={{"align":"left"}}/>
                            <CompletedAssignments/>
                            <Grades/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

/*<div className="col-lg-3">
    <SideMenu/>
</div>*/
export default Dashboard;
