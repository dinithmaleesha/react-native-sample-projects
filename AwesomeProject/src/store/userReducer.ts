const initialState = {
  isLoggedIn: false,
  userName: ''
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const CHANGE_NAME = 'CHANGE_NAME';

type ActionType = {
  type: string;
  payload: any;
};

const userReducer = (state = initialState, { type, payload }: ActionType) => {
  switch (type) {
      case LOGIN:
          return { ...state, isLoggedIn: payload };

      case LOGOUT:
          return { ...state, isLoggedIn: payload };

      case CHANGE_NAME:
          return { ...state, userName: payload };

      default:
          return state;
  }
};

export default userReducer;