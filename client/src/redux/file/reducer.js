import { fileActionTypes } from "./actions";

const initialState = {
  progress: 0,
};

const file = (state = initialState, action) => {
  switch (action.type) {
    case fileActionTypes.INCREASE_PROGRESS:
      return { ...state, progress: action.payload.progress };
    default:
      return state;
  }
};

export default file;
