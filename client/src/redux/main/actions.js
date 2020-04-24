export const mainActionTypes = {
  FETCH_RECORD_START: "FETCH_RECORD_START",
  FETCH_RECORD_SUCCESS: "FETCH_RECORD_SUCCESS",
  CREATGE_RECORD_START: "CREATGE_RECORD_START",
  CREATE_RECORD_SUCCESS: "CREATE_RECORD_SUCCESS",
};

export const fetchRecordStart = (payload) => ({
  type: mainActionTypes.FETCH_RECORD_START,
  payload: payload,
});

export const fetchRecordSuccess = (record) => ({
  type: mainActionTypes.FETCH_RECORD_SUCCESS,
  payload: record,
});

export const createRecordStart = (data) => ({
  type: mainActionTypes.CREATGE_RECORD_START,
  payload: data,
});

export const createRecordSuccess = (record) => ({
  type: mainActionTypes.CREATE_RECORD_SUCCESS,
  payload: record,
});
