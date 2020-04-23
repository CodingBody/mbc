import auth from "./auth/authReducer";
import { combineReducers } from "redux";
import modal from "./modal/modalReducer";
import appUser from "./appUser/appUserReducer";
import cud from "./cud/cudReducer";

const rootReducer = combineReducers({
  auth,
  modal,
  appUser,
  cud,
});

export default rootReducer;
