import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import '../stylesheets/index.css';

class SideMenu extends Component {
    render() {
        return(
            <div className="side-menu">
                <nav class="navbar">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a className="navbar-brand" id="title">SWAPR: PHYS 2211</a>
                        </li>
                        <li><Link to='/'>Dashboard</Link></li>
                        <li><Link to='/gradeAssignment'>Grade Assignment</Link></li>
                        <li><Link to='/submit'>Submit Assignment</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

//const connectedSideMenu = connect()(SideMenu);
//export { connectedSideMenu as SideMenu };
export { SideMenu };
