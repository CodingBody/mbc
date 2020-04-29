export const mainActionTypes = {
  FETCH_RECORD_START: "FETCH_RECORD_START",
  FETCH_RECORD_SUCCESS: "FETCH_RECORD_SUCCESS",
  CREATE_RECORD_START: "CREATE_RECORD_START",
  CREATE_RECORD_SUCCESS: "CREATE_RECORD_SUCCESS",
  NO_RECORD_IN_REDUX: "NO_RECORD_IN_REDUX",
  DELETE_RECORD_START: "DELETE_RECORD_START",
  DELETE_RECORD_SUCCESS: "DELETE_RECORD_SUCCESS",
  POPULATE_RECORD_TO_EDIT: "POPULATE_RECORD_TO_EDIT",
  POPULATE_COLUMN_NAMES_TO_CREATE: "POPULATE_COLUMN_NAMES_TO_CREATE",
  UPDATE_RECORD_START: "UPDATE_RECORD_START",
  UPDATE_RECORD_SUCCESS: "UPDATE_RECORD_SUCCESS",
  CLEAR_TABLE: "CLEAR_TABLE",
};

export const clearTableOnRouteChange = () => ({
  type: mainActionTypes.CLEAR_TABLE,
});

export const fetchRecordStart = (payload) => ({
  type: mainActionTypes.FETCH_RECORD_START,
  payload: payload,
});

export const fetchRecordSuccess = (record) => ({
  type: mainActionTypes.FETCH_RECORD_SUCCESS,
  payload: record,
});

export const createRecordStart = (data) => ({
  type: mainActionTypes.CREATE_RECORD_START,
  payload: data,
});

export const createRecordSuccess = (record) => ({
  type: mainActionTypes.CREATE_RECORD_SUCCESS,
  payload: record,
});

export const noRecordInRedux = (record) => ({
  type: mainActionTypes.NO_RECORD_IN_REDUX,
  payload: record,
});

export const deleteRecordStart = (record) => ({
  type: mainActionTypes.DELETE_RECORD_START,
  payload: record,
});

export const deleteRecordSuccess = (record) => ({
  type: mainActionTypes.DELETE_RECORD_SUCCESS,
  payload: record,
});

export const populateRecordOnEdit = (record) => ({
  type: mainActionTypes.POPULATE_RECORD_TO_EDIT,
  payload: { record },
});

export const populateColumnNamesOnCreate = (record) => ({
  type: mainActionTypes.POPULATE_COLUMN_NAMES_TO_CREATE,
  payload: { record },
});

export const updateRecordStart = (record) => ({
  type: mainActionTypes.UPDATE_RECORD_START,
  payload: record,
});

export const updateRecordSuccess = (record) => ({
  type: mainActionTypes.UPDATE_RECORD_SUCCESS,
  payload: record,
});
