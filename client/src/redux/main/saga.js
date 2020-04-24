import { all, call, takeLatest, put } from "redux-saga/effects";
import {
  mainActionTypes,
  fetchRecordSuccess,
  createRecordSuccess,
} from "./actions";
import axios from "axios";

// api
export function* fetchDataFromDb({ payload }) {
  try {
    const { id, category } = payload;
    let ctg = category.toLowerCase();
    let res;
    if (id !== undefined) {
      res = yield axios.get(`/api/${ctg}/${id}`);
    } else {
      res = yield axios.get(`/api/${ctg}/`);
    }
    const data = res.data;

    if (Array.isArray(data)) {
      const columnNames = Object.keys(data[0]);
      const record = data.map((d) => Object.values(d));
      console.log("data in saga", data);
      console.log("columnNames in saga", columnNames);
      console.log("user in saga", record);

      yield put(fetchRecordSuccess({ record, columnNames }));
    } else {
      const columnNames = Object.keys(data);
      const record = data;
      console.log(columnNames, record, data, "user");
      yield put(fetchRecordSuccess({ record, columnNames }));
    }
  } catch (err) {
    console.error(err);
  }
}

export function* createRecord({ payload }) {
  try {
    const { form, category } = payload;
    console.log(payload);
    let ctg = category.toLowerCase();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { title, title_eng, priority, genre_list, usageyn } = form;
    const body = JSON.stringify({
      title,
      title_eng,
      priority,
      genre_list,
      usageyn,
    });
    const result = yield axios.post(`/api/${ctg}/`, body, config);
    const record = result.data;
    console.log(record, "record");
    yield put(createRecordSuccess({ record }));
  } catch (err) {
    console.error(err);
  }
}

// listeners
export function* onFetchData() {
  yield takeLatest(mainActionTypes.FETCH_RECORD_START, fetchDataFromDb);
}

export function* onCreateRecord() {
  yield takeLatest(mainActionTypes.CREATGE_RECORD_START, createRecord);
}

// compose
export function* mainSaga() {
  yield all([call(onFetchData), call(onCreateRecord)]);
}
