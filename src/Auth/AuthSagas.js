// /* eslint-disable no-undef */
import { all, put, takeLatest } from "redux-saga/effects";

import { AuthActions, AuthTypes } from "./AuthActions";

export function* facebookLoginSaga(api, { payload }) {
  console.log("Facebook Login Saga Ejecutada - Provider Updatedd");
  // ! Cuidado con el yield para las promesas
  const response = yield api.facebookLogin(payload);
  let userForm = {
    name: response.data.data.user.name,
    email: response.data.data.user.email,
    picture: response.data.data.user.picture,
    loggedIn: true,
    token: response.data.data.token,
  };
  yield put(AuthActions.saveLoginInfo(userForm));
}

export function* googleLoginSaga(api, { payload }) {
  console.log("Facebook Login Saga Ejecutada - Provider Updatedd");
  const response = api.facebookLogin(payload);
  // yield put(AuthActions.saveLoginInfo({ provider: "facebook" }));
}

export function* loginSaga(api, { payload }) {
  console.log("login normal");
  console.log(payload);
  //   const response = yield api.sendLogin({ payload });
}

export function forgetPasswordSaga(api, { payload }) {
  console.log("password forget" + payload.email);
}

export function* logOutSaga(api) {
  console.log("log out");
  yield put(AuthActions.modifyLogOut({}));
}

function* ActionWatcher(api) {
  // yield takeLatest(AuthTypes.GOOGLE_LOGIN, googleLoginSaga, api);
  yield takeLatest(AuthTypes.FACEBOOK_LOGIN, facebookLoginSaga, api);
  yield takeLatest(AuthTypes.LOGIN_FORM, loginSaga, api);
  yield takeLatest(AuthTypes.LOG_OUT, logOutSaga, api);
  yield takeLatest(AuthTypes.FORGET_PASSWORD, forgetPasswordSaga, api);
}

export default function* rootSaga(api) {
  yield all([ActionWatcher(api)]);
}
