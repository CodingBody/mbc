import { all, call } from "redux-saga/effects";
import { appUserSaga } from "./appUser/appUserSaga";
import { authSaga } from "./auth/authSaga";

export default function* rootSage() {
  yield all([call(appUserSaga), call(authSaga)]);
}
