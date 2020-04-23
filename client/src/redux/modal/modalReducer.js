import { modalActionTypes } from "./modalActions";

const initialState = {
  openHelp: false,
  openCreate: false,
  openEdit: false,
};

const modal = (state = initialState, action) => {
  switch (action.type) {
    case modalActionTypes.TOGGLE_HELP_MODAL:
      return { ...state, openHelp: !state.openHelp };
    case modalActionTypes.TOGGLE_CREATE_MODAL:
      return { ...state, openCreate: !state.openCreate };
    case modalActionTypes.TOGGLE_EDIT_MODAL:
      return { ...state, openEdit: !state.openEdit };
    default:
      return state;
  }
};

export default modal;
