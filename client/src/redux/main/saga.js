import { all, select, call, takeLatest, put } from "redux-saga/effects";
import {
  mainActionTypes,
  fetchRecordSuccess,
  createRecordSuccess,
  noRecordInRedux,
  deleteRecordSuccess,
  updateRecordSuccess,
  loadingStart,
  loadingFinish,
} from "./actions";
import axios from "axios";
import { checkFormType } from "./../../utils/Helper";

// @@ coming value: object
export function* createRecord({ payload }) {
  const data = (state) => state.main.data;
  try {
    yield put(loadingStart());
    const { form, category } = payload;

    let ctg = category.toLowerCase();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    // add switch statement

    const body = checkFormType({ form, category: ctg });
    console.log(body, ctg, "body, ctg");
    const result = yield axios.post(`/api/${ctg}/`, body, config);
    console.log(result, "success");
    if (!result.data) return;

    const recordInRedux = yield select(data);
    const record = result.data;
    const columnNames = Object.keys(record);
    const isArray = Array.isArray(recordInRedux);
    if (isArray) {
      const res = yield Object.values(record);

      yield put(createRecordSuccess({ columnNames, record: res }));
      yield put(loadingFinish());

      return;
    }

    if (!isArray) {
      const res = yield Object.values(record);

      yield put(noRecordInRedux({ columnNames, record: res }));
      yield put(loadingFinish());
      return;
    }
  } catch (err) {
    console.error(err);
    yield put(loadingFinish());
  }
}

// api
// @@ coming value: array or object
export function* fetchDataFromDb({ payload }) {
  try {
    yield put(loadingStart());

    const { id, category } = payload;
    let ctg = category.toLowerCase();
    let res;
    if (id !== undefined) {
      res = yield axios.get(`/api/${ctg}/${id}`);
    } else {
      res = yield axios.get(`/api/${ctg}/`);
    }
    const data = res.data;
    console.log(data, "data");

    if (Array.isArray(data)) {
      const columnNames = Object.keys(data[0]);
      const record = data.map((d) => Object.values(d));

      yield put(fetchRecordSuccess({ record, columnNames }));
      yield put(loadingFinish());
    } else {
      const columnNames = Object.keys(data);
      const record = Object.values(data);

      yield put(fetchRecordSuccess({ record: [record], columnNames }));
      yield put(loadingFinish());
    }
  } catch (err) {
    console.error(err);
    yield put(loadingFinish());
  }
}

export function* deleteRecord({ payload }) {
  const data = (state) => state.main.data;
  const record = yield select(data);
  let { id, category } = payload;

  try {
    if (window.confirm("Are you sure? This can Not be undone!")) {
      yield put(loadingStart());
      const res = yield axios.delete(`/api/${category}/${id}`);
      for (let i = 0; i < record.length; i++) {
        for (let x = 0; x < record[i].length; x++) {
          if (record[i][x] === res.data) {
            let newRecord = record.filter((rec) => rec !== record[i]);
            yield put(deleteRecordSuccess({ newRecord }));
          }
        }
      }
    }
    yield put(loadingFinish());
  } catch (err) {
    console.log(err);
    yield put(loadingFinish());
  }
}

export function* updateRecord({ payload }) {
  try {
    if (window.confirm("Are you sure? previous record will be removed!")) {
      yield put(loadingStart());

      const record = yield select((state) => state.main.data);
      const { id, category, form } = payload;
      // !! todo add switch statement
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      // add switch statement
      const body = checkFormType({ category, form });
      console.log(form, body, "form and body in saga");

      // !! well done let's brag

      const res = yield axios.put(`/api/${category}/${id}`, body, config);
      const data = res.data;
      const newRecord = Object.values(data);
      for (let i = 0; i < record.length; i++) {
        for (let x = 0; x < record[i].length; x++) {
          if (record[i][x] === data.id) {
            let records = record.filter((rec) => rec !== record[i]);
            // which one to push
            records.push(newRecord);
            yield put(updateRecordSuccess({ record: records }));
          }
        }
      }
    }
    yield put(loadingFinish());
  } catch (err) {
    console.log(err);
    yield put(loadingFinish());
  }
}

// listeners
export function* onFetchData() {
  yield takeLatest(mainActionTypes.FETCH_RECORD_START, fetchDataFromDb);
}

export function* onCreateRecord() {
  yield takeLatest(mainActionTypes.CREATE_RECORD_START, createRecord);
}

export function* onDeleteRecord() {
  yield takeLatest(mainActionTypes.DELETE_RECORD_START, deleteRecord);
}

export function* onUpdateRecord() {
  yield takeLatest(mainActionTypes.UPDATE_RECORD_START, updateRecord);
}

// compose
export function* mainSaga() {
  yield all([
    call(onFetchData),
    call(onUpdateRecord),
    call(onDeleteRecord),
    call(onCreateRecord),
  ]);
}
