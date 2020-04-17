import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = {};

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));
export default store;
