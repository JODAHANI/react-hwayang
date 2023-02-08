import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  LOGOUT,
} from "../_actions/types";

export default function (state = {}, action: any) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSucces: action.payload };
    case REGISTER_USER:
      return { ...state, register: action.payload };
    case AUTH_USER:
      return { ...state, userData: action.payload };
    case LOGOUT:
      return { ...state, userData: { isAuth: false } };
    default:
      return state;
  }
}
