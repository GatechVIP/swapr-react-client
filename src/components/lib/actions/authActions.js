import { authConstants } from '../constants/authConstants';
import { alertActions } from './alertActions';
import { loginService } from '../services/loginService';
import { history } from '../helpers/history';

export const authActions = {
    login,
    logout
};

export function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        loginService.login(username, password)
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };
    
    function request(user) { return { type: authConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: authConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: authConstants.LOGIN_FAILURE, error } }
}

function logout() {
    loginService.logout();
    return { type: authConstants.LOGOUT };
}
