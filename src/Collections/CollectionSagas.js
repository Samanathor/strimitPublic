import { all, takeLatest } from "redux-saga/effects";
import { CollectionTypes } from "./CollectionActions";

export function* sendColectionCreate(api, { payload }) {
  const response = yield api.sendCollection({ payload });
  console.log(response);
}

function* ActionWatcher(api) {
  yield takeLatest(
    CollectionTypes.SEND_COLLECTION_CREATE,
    sendColectionCreate,
    api
  );
}

export default function* rootSaga(api) {
  yield all([ActionWatcher(api)]);
}
