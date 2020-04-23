export const crdActionTypes = {
  POPULATE_RECORD_TO_EDIT: "POPULATE_RECORD_TO_EDIT",
  POPULATE_COLUMN_NAMES_TO_CREATE: "POPULATE_COLUMN_NAMES_TO_CREATE",
};

export const populateRecordOnEdit = (record) => ({
  type: crdActionTypes.POPULATE_RECORD_TO_EDIT,
  payload: { record },
});

export const populateColumnNamesOnCreete = (record) => ({
  type: crdActionTypes.POPULATE_COLUMN_NAMES_TO_CREATE,
  payload: { record },
});
