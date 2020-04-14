import auth from "./authReducer";
import { combineReducers } from "redux";
import modal from "./modalReducer";

const rootReducer = combineReducers({
  auth: auth,
  modal: modal,
});

export default rootReducer;
