export const contentActionTypes = {
  SEARCH_SUCCESS: "SEARCH_SUCCESS",
  SEARCH_START: "SEARCH_START",
};

export const searchStart = (payload) => ({
  type: contentActionTypes.SEARCH_START,
  payload,
});

export const searchSuccess = (payload) => ({
  type: contentActionTypes.SEARCH_SUCCESS,
  payload,
});
