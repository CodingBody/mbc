import { all, call } from "redux-saga/effects";
import { appUserSaga } from "./appUser/saga";
import { authSaga } from "./auth/saga";
import { mainSaga } from "./main/saga";
import { fileSaga } from "./file/saga";

export default function* rootSage() {
  yield all([call(authSaga), call(mainSaga), call(fileSaga)]);
}
