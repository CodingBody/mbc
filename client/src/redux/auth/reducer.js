import { authActionTypes } from "./actions";

const initialState = {
  user: null,
  error: null,
};

const auth = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case authActionTypes.CHECK_IF_USER_LOGIN:
      return { ...state, user: "hello" };
    case authActionTypes.USER_LOGIN_SUCCESS:
      return { ...state, user: payload };
    case authActionTypes.USER_LOGIN_FAILURE:
      return { ...state, user: null, error: payload };
    default:
      return state;
  }
};

export default auth;
