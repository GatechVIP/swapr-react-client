import React from 'react';
//import ReactDOM from 'react-dom';
import '../stylesheets/index.css';
import GradeItem from './GradeItem';

export default class Grades extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    gradesList:[]
  };

}

componentWillMount(){
  //Later this will take in from main page state through props
  this.setState({gradesList: [
    {
      title: "Algebra1",
      score: "18.0"
    },
    {
      title: "Algebra2",
      score: "14.5"
    },
    {
      title: "Algebra3",
      score: "10.5"
    },
    {
      title: "Algebra4",
      score: "16.0"
    }
  ]}
);
}
render(){
    return (
      <div id="completed-block" className = "col-lg-5">
          <h3 align="center">Grades</h3>
          <div>
              <table style={{"table-layout":"fixed"}}>
                  {this.state.gradesList.map((grade) => {
                  return(<GradeItem grade={grade}/>)
                  })}
              </table>
          </div>
      </div>
    );
  }
}
