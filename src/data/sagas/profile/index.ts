import { call, put, takeLatest } from "redux-saga/effects";

import {
  fetchProfileAction,
  resetFetchProfileAction,
} from "src/data/actions/profile";
import services from "src/data/services";
import {
  fetchFailed,
  fetchRequest,
  fetchReset,
  fetchSuccess,
} from "src/data/slices/profile";

function* fetchProfile({ payload }) {
  yield put(fetchRequest());

  try {
    const { data } = yield call(services.profile.getProfile, payload.id);
    yield put(fetchSuccess(data));
  } catch (error) {
    yield put(fetchFailed(error));
  }
}

function* resetFetchProfile() {
  yield put(fetchReset());
}

const profileSaga = () => [
  takeLatest(fetchProfileAction, fetchProfile),
  takeLatest(resetFetchProfileAction, resetFetchProfile),
];
export default profileSaga;
