import { combineReducers } from "redux";
import auth from "./auth/reducer";
import modal from "./modal/reducer";
import cud from "./cud/reducer";
import main from "./main/reducer";

const rootReducer = combineReducers({
  auth,
  modal,
  cud,
  main,
});

export default rootReducer;
