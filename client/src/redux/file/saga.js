import { all, call, takeLatest, select, put } from "redux-saga/effects";
import { fileActionTypes } from "./actions";
import { authenticateUser } from "../helper";

// api
export function* loadFileToStorage({ payload }) {
  const user = (state) => state.auth.user;
  const currentUser = yield select(user);
  console.log(payload, "payload");

  if (!currentUser) return alert("you need to login first");
  if (currentUser) {
    const { id, upload_key, workspace_id } = currentUser;
    console.log(put, "out");
    authenticateUser(id, upload_key, workspace_id, payload);
  }

  //   if (!payload) return;
  //   if (payload.length === 1) {
  //     payload[0];
  //   } else {
  //   }
}

// listeners

export function* onUploadFile() {
  yield takeLatest(fileActionTypes.UPLOAD_FILE_START, loadFileToStorage);
}

// compose

export function* fileSaga() {
  yield all([call(onUploadFile)]);
}
