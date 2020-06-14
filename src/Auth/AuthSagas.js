// /* eslint-disable no-undef */
import { all, put, takeLatest } from "redux-saga/effects";

import { AuthActions, AuthTypes } from "./AuthActions";

export function* facebookLoginSaga(api) {
  console.log("Facebook Login Saga Ejecutada - Provider Updatedd");
  yield put(
    AuthActions.logIn({
      name: "loginFacebook",
      email: "login@facebook.com",
      loggedIn: true,
    })
  );
}

export function* googleLoginSaga(api) {
  console.log("Google Login Saga Ejecutada - Provider Updatedd");
  yield put(
    AuthActions.logIn({
      name: "loginGoogle",
      email: "login@google.com",
      loggedIn: true,
    })
  );
}

export function* loginSaga(api, { payload }) {
  console.log("login normal");
  //   const response = yield api.sendLogin({ payload });
  yield put(
    AuthActions.logIn({
      name: "loginNormal",
      email: "login@normal.com",
      loggedIn: true,
    })
  );
}

export function forgetPasswordSaga(api, { payload }) {
  console.log("password forget" + payload.email);
}

export function* logOutSaga(api) {
  console.log("log out");
  yield put(AuthActions.modifyLogOut({}));
}

function* ActionWatcher(api) {
  yield takeLatest(AuthTypes.FACEBOOK_LOGIN, facebookLoginSaga, api);
  yield takeLatest(AuthTypes.GOOGLE_LOGIN, googleLoginSaga, api);
  yield takeLatest(AuthTypes.LOGIN_FORM, loginSaga, api);
  yield takeLatest(AuthTypes.LOG_OUT, logOutSaga, api);
  yield takeLatest(AuthTypes.FORGET_PASSWORD, forgetPasswordSaga, api);
}

export default function* rootSaga(api) {
  yield all([ActionWatcher(api)]);
}
