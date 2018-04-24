import React, { Component } from 'react';
import { connect } from 'react-redux';

import { history } from './lib/helpers/history';
import { SideMenu } from './views/SideMenu';
import { Main } from './Main';
import { alertActions } from './lib/actions/alertActions';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/index.css';

class App extends Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            dispatch(alertActions.clear());
        });
    }

    render() {
        return (
            <div className="App">
                <SideMenu />	
                <Main class="main"/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
