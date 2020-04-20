import { all, call } from "redux-saga/effects";
import { appUserSaga } from "./appUserSaga";
import { authSaga } from "./authSaga";

export default function* rootSage() {
  yield all([call(appUserSaga), call(authSaga)]);
}
