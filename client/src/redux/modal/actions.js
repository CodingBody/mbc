export const modalActionTypes = {
  TOGGLE_HELP_MODAL: "TOGGLE_HELP_MODAL",
  TOGGLE_CREATE_MODAL: "TOGGLE_CREATE_MODAL",
  TOGGLE_EDIT_MODAL: "TOGGLE_EDIT_MODAL",
  TOGGLE_SORT_MODAL: "TOGGLE_SORT_MODAL",
  SET_DATA_TO_EDIT_MODAL: "SET_DATA_TO_EDIT_MODAL",
};

export const toggleHelpModal = () => ({
  type: modalActionTypes.TOGGLE_HELP_MODAL,
});

export const toggleCreateModal = () => ({
  type: modalActionTypes.TOGGLE_CREATE_MODAL,
});

export const toggleEditModal = () => ({
  type: modalActionTypes.TOGGLE_EDIT_MODAL,
});

export const toggleSortModal = () => ({
  type: modalActionTypes.TOGGLE_SORT_MODAL,
});

export const setDataToEditModal = (data) => ({
  type: modalActionTypes.SET_DATA_TO_EDIT_MODAL,
  payload: data,
});
