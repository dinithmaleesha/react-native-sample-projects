import { LOGIN, LOGOUT, CHANGE_NAME, GET_DUCKS } from './actionTypes';
import { UserActionTypes } from './userActions';

export interface UserState { // Exporting the UserState type to use in the root reducer
    isLoggedIn: boolean;
    userName: string;
    ducks: string;
}

const initialState: UserState = {
    isLoggedIn: false,
    userName: '',
    ducks: '',
};

const userReducer = (state = initialState, action: UserActionTypes): UserState => {
    switch (action.type) {
        case LOGIN:
            return { ...state, isLoggedIn: action.payload };
        case LOGOUT:
            return { ...state, isLoggedIn: action.payload };
        case CHANGE_NAME:
            return { ...state, userName: action.payload };
        case GET_DUCKS:
            return { ...state, ducks: action.payload };
        default:
            return state;
    }
};

export default userReducer;
