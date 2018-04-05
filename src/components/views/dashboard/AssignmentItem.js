import React, { Component } from 'react';
import {Link} from "react-router-dom";
import '../../stylesheets/index.css';

class AssignmentItem extends Component {
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        {this.props.assignment.dueDate}
                    </div>
                    <div class="col-lg-6" align="right">
                        <Link to="/submit">
                            <p>{this.props.assignment.title}</p>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default AssignmentItem;
