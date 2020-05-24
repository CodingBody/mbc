import { modalActionTypes } from "./actions";

const initialState = {
  openHelp: false,
  openCreate: false,
  openEdit: false,
  openSort: false,
  alert: null,
};

const modal = (state = initialState, action) => {
  switch (action.type) {
    case modalActionTypes.TOGGLE_HELP_MODAL:
      return { ...state, openHelp: !state.openHelp };
    case modalActionTypes.TOGGLE_CREATE_MODAL:
      return { ...state, openCreate: !state.openCreate };
    case modalActionTypes.TOGGLE_EDIT_MODAL:
      return { ...state, openEdit: !state.openEdit };
    case modalActionTypes.TOGGLE_SORT_MODAL:
      return { ...state, openSort: !state.openSort };
    case modalActionTypes.TOGGLE_ALERT_MODAL:
      return {
        ...state,
        alert: action.payload,
      };
    default:
      return state;
  }
};

export default modal;
