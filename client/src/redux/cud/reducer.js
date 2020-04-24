import { crdActionTypes } from "./actions";
const initialState = {
  edit: {
    record: null,
  },
  create: {
    record: null,
  },
};

const cud = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case crdActionTypes.POPULATE_RECORD_TO_EDIT:
      return {
        ...state,
        edit: {
          record: payload.record,
        },
      };
    case crdActionTypes.POPULATE_COLUMN_NAMES_TO_CREATE:
      return {
        ...state,
        create: {
          record: payload.record,
        },
      };
    default:
      return state;
  }
};

export default cud;
