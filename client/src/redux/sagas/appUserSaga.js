import { all, call, takeLatest, select, put } from "redux-saga/effects";
import { appUserActionTypes } from "./../actions-types/appUserActions";
import axios from "axios";
import { fetchUserSuccess } from "../actions-types/appUserActions";

// api
export function* fetchUserFromDb({ payload }) {
  console.log(payload, "payload");
  const res = yield axios.get("/api/employees/");
  const data = res.data;
  const tableHeader = Object.keys(data[0]);
  const user = data.map((d) => Object.values(d));

  yield put(fetchUserSuccess({ user, tableHeader }));
}

// listeners

export function* onFetchAllUsers() {
  yield takeLatest(appUserActionTypes.FETCH_USER_START, fetchUserFromDb);
}

// compose

export function* appUserSaga() {
  yield all([call(onFetchAllUsers)]);
}
