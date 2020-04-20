import { all, call, takeLatest, put } from "redux-saga/effects";
import axios from "axios";
import {
  authActionTypes,
  userLoginSuccess,
  userLoginfailure,
} from "./../actions-types/authActions";

// api
export function* logUserIn({ payload }) {
  console.log(payload, "payload");
  const { username, password } = payload;
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ username, password });
  try {
    const res = yield axios.post("/api/auth/login", body, config);
    yield put(userLoginSuccess(res.data));
  } catch (err) {
    const errors = err.response.data.errors;
    yield put(userLoginfailure(errors));
  }
}

// listeners

export function* onLoginUser() {
  yield takeLatest(authActionTypes.USER_LOGIN_START, logUserIn);
}

// compose

export function* authSaga() {
  yield all([call(onLoginUser)]);
}
