import React from 'react';
import '../stylesheets/index.css';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Link} from "react-router-dom";

export default class GradeItem extends React.Component {
  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            {this.props.grade.title}
          </div>
          <div class="col-lg-6" align="right">
            <p>{this.props.grade.score}</p>  
          </div>
        </div>
      </div>
    );
  }
}
