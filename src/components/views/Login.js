import React, { Component }  from 'react';
//import { Redirect } from 'react-router-dom';

var isAuthenticated = false;

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {username: '', password: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        // Send this.state.username and this.state.password as parameters for a login HTTP request
        /*fetch('swapr-dev.vip.gatech.edu:8443/login?username='+this.state.username+'&password='+this.state.password)
            .then((err, response) => (err, response.json()))
            .then((err, responseJson) => {
                if (err)
                    alert("Login failed, please try again");
                else {
                    const location = this.props.location;
                    if (location.state && location.state.nextPathname)
                        browserHistory.push(location.state.nextPathname)
                        <Redirect to=location.state.nextPathname />
                    else
                        <Redirect to='/dashboard' />
                }
            }).catch((err) => {
                // Handle error
                console.log(err);
            });*/
        isAuthenticated = true;
    }

    render() {
        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <table>
                        <tr>
                            <td>
                                <label>Username:</label>
                            </td>
                            <td>
                                <input type="text" name="username" onChange={this.handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Password:</label>
                            </td>
                            <td>
                                <input type="text" name="password" onChange={this.handleChange} />
                            </td>
                        </tr>
                        <input type="submit" value="Log in" />
                    </table>
                </form>
            </div>
        );
    }
}

export function isLoggedIn() {
    return isAuthenticated;
}

export default Login;
