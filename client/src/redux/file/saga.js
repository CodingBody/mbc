import { all, call, takeLatest, select } from "redux-saga/effects";
import axios from "axios";
import { fileActionTypes } from "./actions";
import { Select } from "@material-ui/core";
import { authenticateUser } from "../helper";

// api
export function* loadFileToStorage({ payload }) {
  const user = (state) => state.auth.user;
  const currentUser = yield select(user);
  console.log(typeof currentUser, "currentUser");

  if (!currentUser) return alert("you need to login first");
  if (currentUser) {
    const { id, upload_key, workspace_id } = currentUser;

    authenticateUser(id, upload_key, workspace_id);
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
