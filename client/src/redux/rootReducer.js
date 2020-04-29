import { combineReducers } from "redux";
import auth from "./auth/reducer";
import modal from "./modal/reducer";
import main from "./main/reducer";

const rootReducer = combineReducers({
  auth,
  modal,
  main,
});

export default rootReducer;
