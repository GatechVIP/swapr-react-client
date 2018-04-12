import React, { Component } from 'react';
import AssignmentItem from './AssignmentItem';
import '../../stylesheets/index.css';

class CompletedAssignments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            assignmentList:[]
        };
    }

    componentWillMount() {
        //Later this will take in from main page state through props
        this.setState({assignmentList: [
            {
                title: "Velocity1",
                dueDate: "March 3",
                dueTime: "12:00pm"
            },
            {
                title: "Velocity1",
                dueDate: "March 3",
                dueTime: "12:00pm"
            },
            {
                title: "Velocity1",
                dueDate: "March 3",
                dueTime: "12:00pm"
            },
            {
                title: "Velocity1",
                dueDate: "March 3",
                dueTime: "12:00pm"
            }
        ]});
    }

    render() {
        return (
            <div id="completed-block" className = "col-lg-5">
                <h3 align="center">Completed</h3>
                <div>
                    {this.state.assignmentList.map((assignment) => {
                        return(<AssignmentItem assignment={assignment}/>)
                    })}
                </div>
            </div>
        );
    }
}

export default CompletedAssignments;