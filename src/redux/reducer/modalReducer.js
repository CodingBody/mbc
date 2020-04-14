import { modalActionTypes } from "./../actions-types/modalActions";

const initialState = {
  openHelp: false,
};

const modal = (state = initialState, action) => {
  switch (action.type) {
    case modalActionTypes.OPEN_HELP_MODAL:
      return { ...state, openHelp: !state.openHelp };
    default:
      return state;
  }
};

export default modal;
