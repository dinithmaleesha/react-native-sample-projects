import axios from "axios";
import { Dispatch } from "redux";
import { LOGIN, LOGOUT, CHANGE_NAME, GET_DUCKS } from './actionTypes';

// Define Action Types
interface LoginAction {
    type: typeof LOGIN;
    payload: boolean;
}

interface LogoutAction {
    type: typeof LOGOUT;
    payload: boolean;
}

interface ChangeNameAction {
    type: typeof CHANGE_NAME;
    payload: string;
}

interface GetDucksAction {
    type: typeof GET_DUCKS;
    payload: string;
}

export type UserActionTypes = LoginAction | LogoutAction | ChangeNameAction | GetDucksAction;

export const loginAction = (): LoginAction => ({
    type: LOGIN,
    payload: true,
});

export const logoutAction = (): LogoutAction => ({
    type: LOGOUT,
    payload: false,
});

export const changeNameAction = (userName: string): ChangeNameAction => ({
    type: CHANGE_NAME,
    payload: userName,
});

export const getDucks = () => {
    return async (dispatch: Dispatch<UserActionTypes>) => {
        try {
            const { data } = await axios.get('https://random-d.uk/api/v2/random');
            dispatch({
                type: GET_DUCKS,
                payload: data.url,
            });
        } catch (error) {
            console.error(error);
        }
    }
}
