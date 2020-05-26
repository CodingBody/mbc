import { combineReducers } from "redux";
import auth from "./auth/reducer";
import modal from "./modal/reducer";
import main from "./main/reducer";
import content from "./content/reducer";

const rootReducer = combineReducers({
  auth,
  modal,
  main,
  content,
});

export default rootReducer;
