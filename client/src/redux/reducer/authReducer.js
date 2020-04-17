import { authActionTypes } from "../actions-types/authActions";

const initialState = {
  user: null,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case authActionTypes.CHECK_IF_USER_LOGIN:
      console.log("runed");
      return { ...state, user: "hello" };
    default:
      return state;
  }
};

export default auth;
