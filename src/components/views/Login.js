import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { authActions } from '../lib/actions/authActions';

class Login extends Component {
    constructor(props) {
        super(props);

        this.props.dispatch(authActions.logout());

        this.state = {username: '', password: '', submitted: false};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        // Send this.state.username and this.state.password as parameters for a login HTTP request
        event.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(authActions.login(username, password));
        }
    }

    render() {
        const { username, password, submitted } = this.state;
        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <table>
                        <tr>
                            <td>
                                <label>Username:</label>
                            </td>
                            <td>
                                <input type="text" name="username" value={username} onChange={this.handleChange} />
                                {submitted && !username &&
                                    <div>Username is required</div>
                                }
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Password:</label>
                            </td>
                            <td>
                                <input type="text" name="password" value={password} onChange={this.handleChange} />
                                {submitted && !password &&
                                    <div>Password is required</div>
                                }
                            </td>
                        </tr>
                        <input type="submit" value="Log in" />
                    </table>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.auth;
    return {
        loggingIn
    };
}

const connectedLogin = connect(mapStateToProps)(Login);
export { connectedLogin as Login };
