import React from 'react';
import '../stylesheets/index.css';
import AssignmentItem from './AssignmentItem';

export default class CompletedAssignments extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    assignmentList:[]
  };
}

componentWillMount(){
  //Later this will take in from main page state through props
  this.setState({assignmentList: [
    {
      title: "Position1",
      dueDate: "April 16",
      dueTime: "12:00pm"
    },
    {
      title: "Position2",
      dueDate: "April 19",
      dueTime: "12:00pm"
    },
    {
      title: "Position3",
      dueDate: "April 24",
      dueTime: "12:00pm"
    },
    {
      title: "Position4",
      dueDate: "April 28",
      dueTime: "12:00pm"
    }
  ]}
);
}
render(){
    return (
      <div id="completed-block" className = "col-lg-5">
      <div>
        <h3>Completed</h3>
      </div>
      <div>
          {this.state.assignmentList.map((assignment) => {
            return(<AssignmentItem assignment={assignment}/>)
          })}
      </div>
      </div>
    );
  }
}
