//import { tokenHeader } from '../helpers/tokenHeader';

export const loginService = {
    login,
    logout
};

function login(username, password) {
    return fetch('/login?username='+username+'&password='+password/*, {mode: 'no-cors'}*/)
        .then(response => {
            if (!response.ok) {
                return Promise.reject(response.statusText);
            }

            return response.json();
        })
        .then(user => {
            if (user && user.token) {
                localStorage.setItem('user', JSON.stringify(user));
            }

            return user;
        });
}

function logout() {
    localStorage.removeItem('user');
}
