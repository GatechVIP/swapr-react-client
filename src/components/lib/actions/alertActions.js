import { alertConstants } from '../constants/alertConstants';

export const alertActions = {
    success,
    error,
    clear
};

export function success(message) {
    return { type: alertConstants.SUCCESS, message };
}

export function error(message) {
    return { type: alertConstants.ERROR, message };
}

export function clear() {
    return { type: alertConstants.CLEAR };
}
