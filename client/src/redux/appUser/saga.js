import { all, call, takeLatest, put } from "redux-saga/effects";
import { appUserActionTypes, fetchUserSuccess } from "./actions";
import axios from "axios";

// api
export function* fetchUserFromDb({ payload }) {
  const userId = payload;

  const res = yield axios.get(`/api/employees/${userId}`);
  const data = res.data;

  if (Array.isArray(data)) {
    const tableHeader = Object.keys(data[0]);
    const user = data.map((d) => Object.values(d));
    console.log("data in saga", data);
    console.log("tableHeader in saga", tableHeader);
    console.log("user in saga", user);

    yield put(fetchUserSuccess({ user, tableHeader }));
  } else {
    const tableHeader = Object.keys(data);
    const user = data;
    console.log(tableHeader, user, data, "user");
    yield put(fetchUserSuccess({ user, tableHeader }));
  }
}

// listeners

export function* onFetchAllUsers() {
  yield takeLatest(appUserActionTypes.FETCH_USER_START, fetchUserFromDb);
}

// compose

export function* appUserSaga() {
  yield all([call(onFetchAllUsers)]);
}