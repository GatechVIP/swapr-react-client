import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <nav>
                    <ul>
                        <li><Link to='/login'>Login</Link></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Header;
