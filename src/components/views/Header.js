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
<<<<<<< HEAD
                        <li><Link to='/gradeAssignment'>Grade Assignment</Link></li>
=======
                        <li><Link to='/dashboard'>Protected</Link></li>
>>>>>>> 2e38ed771800515cf200a0c770156bbd6439d928
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Header;
