import { all, call } from "redux-saga/effects";
import { authSaga } from "./auth/saga";
import { mainSaga } from "./main/saga";
import { contentSaga } from "./content/saga";

export default function* rootSage() {
  yield all([call(authSaga), call(mainSaga), call(contentSaga)]);
}
