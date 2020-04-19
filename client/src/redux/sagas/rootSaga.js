import { all, call } from "redux-saga/effects";
import { appUserSaga } from "./appUserSaga";

export default function* rootSage() {
  yield all([call(appUserSaga)]);
}
