import { fork, all } from "redux-saga/effects";

/** ----------- sagas ------------- */
import AuthSagas from "Auth/AuthSagas";
import CollectionSagas from "Collections/CollectionSagas";

/** ----------- API ------------- */
import createAPI from "common/api";

export const API = createAPI();

export default function* rootSaga() {
  yield all([fork(AuthSagas, API), fork(CollectionSagas, API)]);
}
