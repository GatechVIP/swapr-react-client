import React, { Component } from 'react';
import Header from './views/Header';
import Main from './Main';
//import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Main />
            </div>
        );
    }
}

export default App;