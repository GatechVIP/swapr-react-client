import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <nav>
                    <ul>
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
//<li><Link to='/dashboard'>Protected</Link></li>

export default Header;
