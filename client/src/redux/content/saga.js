import { all, call, takeLatest, put } from "redux-saga/effects";
import axios from "axios";
import { contentActionTypes, searchSuccess } from "./actions";
import { toggleAlertModal } from "./../modal/actions";
import { loadingFinish } from "../main/actions";

// api
function* fetchDataFromDb({ payload }) {
  try {
    const { category, params } = payload;

    const config = {
      headers: {
        "Content-Type": "application.json",
        category: category,
      },
    };

    let res;
    if (params && params !== undefined) {
      res = yield axios.get(`/api/search/${params}`, config);
    } else {
      res = yield axios.get(`/api/search/`, config);
    }

    // yield put(searchSuccess(res.data));
  } catch (err) {
    if (err.response.data.errors) {
      yield put(toggleAlertModal(err.response.data.errors));
    }
    if (err.response.staus === 404) {
      yield put(
        toggleAlertModal([
          { message: "something wrong in server", type: "warning" },
        ])
      );
    }

    yield put(loadingFinish());
  }
}

// compose
function* onSearchStart() {
  console.log("called");
  yield takeLatest(contentActionTypes.SEARCH_START, fetchDataFromDb);
}

export function* contentSaga() {
  yield all([call(onSearchStart)]);
}
