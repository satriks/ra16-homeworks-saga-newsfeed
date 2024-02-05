import { put, takeLatest } from "redux-saga/effects";
import {
  GET_MORE_POSTS,
  GET_POSTS,
  addMorePosts,
  getPostEnd,
  getPostFailed,
  getPostLoading,
  getPostsSuccess,
} from "./DataSlice";
import { getMorePostApi, getPostApi } from "../utils/api";
import { DataItem } from "../models/models";
import { PayloadAction } from "@reduxjs/toolkit";

export function* getMorePostSaga(action: PayloadAction<string>) {
  let ok = false;

  yield put(getPostLoading());
  while (!ok) {
    try {
      const payload: DataItem[] = yield getMorePostApi(action.payload);
      ok = true;
      if (payload.length < 5) {
        yield put(getPostEnd());
      }
      yield put(addMorePosts(payload));
    } catch (error) {
      yield put(getPostFailed((error as Error).message));
    }
    sleep(3000);
  }
}

export function* getPostSaga() {
  let ok = false;

  yield put(getPostLoading());
  while (!ok) {
    try {
      const payload: DataItem[] = yield getPostApi();
      ok = true;

      yield put(getPostsSuccess(payload));
    } catch (error) {
      yield put(getPostFailed((error as Error).message));
    }
    sleep(3000);
  }
}

export function* sagas() {
  yield takeLatest(GET_POSTS, getPostSaga);
  yield takeLatest(GET_MORE_POSTS, getMorePostSaga);
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
