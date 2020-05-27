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
  showTable,
  rankFetchSuccess,
} from "./actions";
import { toggleAlertModal } from "../modal/actions";
import axios from "axios";
import { checkHasSort } from "../helper";
import { checkHasDate } from "./../helper";

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

    // const body = checkFormType({ form, category: ctg });
    const result = yield axios.post(`/api/${ctg}/`, form, config);
    if (!result.data) return;

    yield put(
      toggleAlertModal([
        {
          message: "created successfully",
          alerttype: "success",
        },
      ])
    );

    const recordInRedux = yield select(data);
    const record = result.data;
    const columnNames = Object.keys(record);
    const isArray = Array.isArray(recordInRedux);
    if (isArray) {
      const res = yield Object.values(record);

      yield put(createRecordSuccess({ columnNames, record: res }));
      yield put(loadingFinish());

      yield put(showTable());

      return;
    }

    if (!isArray) {
      const res = yield Object.values(record);

      yield put(noRecordInRedux({ columnNames, record: res }));
      yield put(loadingFinish());

      yield put(showTable());

      return;
    }
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
// api
// @@ coming value: array or object
export function* fetchDataFromDb({ payload }) {
  try {
    yield put(loadingStart());
    let column_names;

    const { params, category, columns } = payload;

    const { sort } = checkHasSort(payload);
    const { startDate, endDate } = checkHasDate(payload);
    if (columns !== undefined) {
      // @@ remember array is not gonna converted to json by default
      column_names = JSON.stringify(columns);
    }
    const config = {
      headers: {
        "Content-Type": "application/json",
        column_names: column_names,
        sort: sort,
        start_date: startDate,
        end_date: endDate,
      },
    };

    let ctg = category.toLowerCase();
    let res;
    if (params !== "" && params !== undefined) {
      console.log(params, "params");
      res = yield axios.get(`/api/${ctg}/${params}`, config);
    } else {
      console.log("no params");
      res = yield axios.get(`/api/${ctg}`, config);
    }
    const data = res.data;
    const clLength = Object.keys(data[0]).length;

    //  if rank, do only this block
    if (category === "statistics.rank") {
      const rankRecord = data;

      yield put(rankFetchSuccess({ rankRecord }));
      yield put(loadingFinish());

      return;
    }

    const columnNames = Object.keys(data[0]);
    const record = data.map((d) => Object.values(d));

    yield put(fetchRecordSuccess({ record, columnNames, clLength }));
    yield put(loadingFinish());
    yield put(showTable());
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

    yield put(
      toggleAlertModal([
        {
          message: "deleted successfully",
          alerttype: null,
        },
      ])
    );
    yield put(loadingFinish());
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

export function* updateRecord({ payload }) {
  try {
    if (window.confirm("Are you sure? previous record will be removed!")) {
      yield put(loadingStart());

      const record = yield select((state) => state.main.data);
      const { id, category, form } = payload;
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      // const body = checkFormType({ category, form });

      // $$ well done let's brag

      const res = yield axios.put(`/api/${category}/${id}`, form, config);
      const data = res.data;
      const newRecord = Object.values(data);
      for (let i = 0; i < record.length; i++) {
        for (let x = 0; x < record[i].length; x++) {
          if (record[i][x] === data.id) {
            let records = record.filter((rec) => rec !== record[i]);
            // which one to push
            const newRecords = [newRecord, ...records];
            yield put(updateRecordSuccess({ record: newRecords }));
          }
        }
      }
    }

    yield put(
      toggleAlertModal([
        {
          message: "updated successfully",
          alerttype: "success",
        },
      ])
    );
    yield put(loadingFinish());
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

// listeners
export function* onFetchData() {
  yield takeLatest(
    [mainActionTypes.FETCH_RECORD_START, mainActionTypes.ADD_SORT_TO_FETCH],
    fetchDataFromDb
  );
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
