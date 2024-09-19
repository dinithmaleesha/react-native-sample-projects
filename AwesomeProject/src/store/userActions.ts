import { Dispatch } from "redux";

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const CHANGE_NAME = 'CHANGE_NAME';

export const loginAction = () => {
    return {
        type: LOGIN,
        payload: true
    };
}

export const logoutAction = () => {
    return {
        type: LOGOUT,
        payload: false
    };
}

export const changeNameAction = (userName: string) => {
    return {
        type: CHANGE_NAME,
        payload: userName
    };
}