import { contentActionTypes } from "./actions";
import { addBooleanToArr } from "./../helper";

const initialState = {
  details: null,
  columnNames: null,
  recordArray: null,
  clLength: null,
};

const content = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case contentActionTypes.SEARCH_SUCCESS:
      return {
        ...state,
        recordArray: addBooleanToArr(payload.recordArray),
        columnNames: payload.columnNames,
        clLength: payload.clLength,
      };
    default:
      return state;
  }
};

export default content;
