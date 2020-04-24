import { mainActionTypes } from "./actions";

const initialState = {
  data: null,
  columnNames: null,
};

const main = (state = initialState, action) => {
  const { type, payload } = action;
  console.log(payload, "record");
  switch (type) {
    case mainActionTypes.FETCH_RECORD_SUCCESS:
      return {
        ...state,
        data: payload.record,
        columnNames: payload.columnNames,
      };
    case mainActionTypes.CREATE_RECORD_SUCCESS:
      return {
        ...state,
        data: payload.record,
      };
    default:
      return state;
  }
};

export default main;
