export const fileActionTypes = {
  INCREASE_PROGRESS: "INCREASE_PROGRESS",
  UPLOAD_FILE_START: "UPLOAD_FILE_START",
};

export const increaseProgress = (payload) => ({
  type: fileActionTypes.INCREASE_PROGRESS,
  payload: payload,
});

export const uploadFileStart = (payload) => ({
  type: fileActionTypes.UPLOAD_FILE_START,
  payload: payload,
});
