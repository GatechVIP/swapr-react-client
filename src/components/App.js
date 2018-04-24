import React, { Component } from 'react';
import Header from './views/Header';
import Main from './Main';
import SideMenu from './views/SideMenu'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/index.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <SideMenu />	
                <Main class="main"/>
            </div>
        );
    }
}

export default App;
