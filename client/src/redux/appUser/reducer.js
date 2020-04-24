import { appUserActionTypes } from "./actions";

const initialState = {
  user: null,
  tableHeader: null,
};

const appUser = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case appUserActionTypes.FETCH_USER_SUCCESS:
      return { ...state, user: payload.user, tableHeader: payload.tableHeader };
    default:
      return state;
  }
};

export default appUser;
