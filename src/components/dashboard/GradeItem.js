import React from 'react';
import '../stylesheets/index.css';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Link} from "react-router-dom";

export default class GradeItem extends React.Component {
  render(){
    return(
      <tr>
        <th style={{"width":"200px"}}>
          {this.props.grade.title}
        </th>
        <th style={{"width":"200px"}}>
          <p>{this.props.grade.score}</p>
        </th>
      </tr>
    );
  }
}
