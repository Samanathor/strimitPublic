// /* eslint-disable no-undef */
import { all, put, takeLatest } from "redux-saga/effects";

import { AuthActions, AuthTypes } from "./AuthActions";

export function* facebookLoginSaga(api) {
  console.log("Facebook Login Saga Ejecutada - Provider Updatedd");
  yield put(AuthActions.saveLoginInfo({ provider: "facebook" }));
}

export function* loginSaga(api, { payload }) {
  console.log("login normal");
  //   const response = yield api.sendLogin({ payload });
  yield put(AuthActions.logIn({}));
}

export function* forgetPasswordSaga(api, { payload }) {
  console.log("password forget" + payload.email);
}

export function* logOutSaga(api) {
  console.log("log out");
  yield put(AuthActions.modifyLogOut({}));
}

function* ActionWatcher(api) {
  yield takeLatest(AuthTypes.FACEBOOK_LOGIN, facebookLoginSaga, api);
  yield takeLatest(AuthTypes.LOGIN, loginSaga, api);
  yield takeLatest(AuthTypes.LOG_OUT, logOutSaga, api);
  yield takeLatest(AuthTypes.FORGET_PASSWORD, forgetPasswordSaga, api);
}

export default function* rootSaga(api) {
  yield all([ActionWatcher(api)]);
}
