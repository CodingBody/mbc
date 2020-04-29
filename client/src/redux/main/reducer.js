import { mainActionTypes } from "./actions";

const initialState = {
  data: null,
  columnNames: null,
  edit: {
    record: null,
  },
  create: {
    record: null,
  },
};

const main = (state = initialState, action) => {
  const { type, payload } = action;
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
        data: [...state.data, payload.record],
        columnNames: payload.columnNames,
      };
    case mainActionTypes.NO_RECORD_IN_REDUX:
      return {
        ...state,
        data: [payload.record],
        columnNames: payload.columnNames,
      };
    case mainActionTypes.DELETE_RECORD_SUCCESS:
      return {
        ...state,
        data: payload.newRecord,
        edit: {
          record: null,
        },
      };
    case mainActionTypes.POPULATE_RECORD_TO_EDIT:
      return {
        ...state,
        edit: {
          record: payload.record,
        },
      };
    case mainActionTypes.POPULATE_COLUMN_NAMES_TO_CREATE:
      return {
        ...state,
        create: {
          record: payload.record,
        },
      };
    case mainActionTypes.UPDATE_RECORD_SUCCESS:
      return {
        ...state,
        data: payload.record,
        edit: {
          record: null,
        },
      };
    case mainActionTypes.CLEAR_TABLE:
      return {
        ...state,
        data: null,
        columnNames: null,

        edit: {
          record: null,
        },
        create: {
          record: null,
        },
      };
    default:
      return state;
  }
};

export default main;
