import React from 'react';

import '../stylesheets/index.css';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Link} from "react-router-dom";

export default class AssignmentItem extends React.Component {
  render(){
    return(
      <tr>
        <th style={{"width":"200px"}}>
            {this.props.assignment.dueDate}
        </th>
        <th style={{"width":"200px"}}>
            <Link to="/submit">
              <p>{this.props.assignment.title}</p>
            </Link>
        </th>
      </tr>
    );
  }
}
