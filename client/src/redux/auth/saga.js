import { all, call, takeLatest, put } from "redux-saga/effects";
import axios from "axios";
import { authActionTypes, userLoginSuccess, userLoginfailure } from "./actions";

// api
export function* logUserIn({ payload }) {
  const { form, history } = payload;

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify(form);

  try {
    const res = yield axios.post("/api/auth/login", body, config);
    if (res.data.result) {
      yield put(userLoginSuccess(res.data.result));
      history.push("/dashboard/mbc/home");
    }
  } catch (err) {
    console.log("-------------");
    if (err.response.data.errors) {
      const errors = err.response.data.errors;
      alert(errors[0].message);
    }
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
