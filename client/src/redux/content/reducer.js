import { contentActionTypes } from "./actions";

const initialState = {
  details: null,
  searchResullt: null,
};

const content = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case contentActionTypes.SEARCH_SUCCESS:
      return { ...state, searchResullt: payload };
    default:
      return state;
  }
};

export default content;
