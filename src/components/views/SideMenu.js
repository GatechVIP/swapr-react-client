import React from 'react';

import '../stylesheets/index.css';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Link} from "react-router-dom";

export default class SideMenu extends React.Component {
  render(){
    return(
      <div className="side-menu">
            <nav class="navbar">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a className="navbar-brand" id="title">SWAPR: PHYS 2211</a>
                    </li>
                    <li class="nav-item">
                        <a href="">Dashboard</a>
                    </li>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/gradeAssignment'>Grade Assignment</Link></li>
                    <li><Link to='/dashboard'>Dashboard</Link></li>
                    <li><Link to='/submit'>Submit Assignment</Link></li>
                </ul>
            </nav>
        </div>
    );
  }
}
