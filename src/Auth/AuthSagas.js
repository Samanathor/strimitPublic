// /* eslint-disable no-undef */
import { all, put, takeLatest } from "redux-saga/effects";

import { AuthActions, AuthTypes } from "./AuthActions";

export function* facebookLoginSaga(api, { payload }) {
  const response = yield api.facebookLogin(payload);
  if (response.data.notification.success === "true") {
    let userForm = {
      name: response?.data?.data?.user?.name,
      email: response?.data?.data?.user?.email,
      picture: response?.data?.data?.user?.picture,
      loggedIn: true,
      token: response?.data?.data?.token,
    };
    yield put(AuthActions.saveLoginInfo(userForm));
  }
  yield put(
    AuthActions.setErrorLogin({
      message:
        "Error en la comunicación con Facebook, por favor intentalo mas tarde.",
    })
  );
}

export function* googleLoginSaga(api, { payload }) {
  const dataExport = {
    googleToken: payload.tokenId,
    googleId: payload.googleId,
  };
  const response = yield api.googleLogin(dataExport);
  if (response.data.notification.success === "true") {
    let userForm = {
      name: response?.data?.data?.user?.name,
      email: response?.data?.data?.user?.email,
      picture: response?.data?.data?.user?.picture,
      loggedIn: true,
      token: response?.data?.data?.token,
    };
    yield put(AuthActions.saveLoginInfo(userForm));
  }
  yield put(
    AuthActions.setErrorLogin({
      message:
        "Error en la comunicación con Google, por favor intentalo mas tarde.",
    })
  );
}

export function* loginSaga(api, { payload }) {
  const response = yield api.normalLogin(payload.data);
  if (response.data.notification.success === "true") {
    let userForm = {
      name: response?.data?.data?.user?.name,
      email: response?.data?.data?.user?.email,
      picture: response?.data?.data?.user?.picture,
      loggedIn: true,
      token: response?.data?.data?.token,
    };
    yield put(AuthActions.saveLoginInfo(userForm));
    return;
  }
  yield put(
    AuthActions.setErrorLogin({
      message: "Verifica los datos de inicio de sesión",
    })
  );
}

export function forgetPasswordSaga(api, { payload }) {
  console.log("password forget" + payload.email);
}

export function* logOutSaga(api) {
  yield put(AuthActions.modifyLogOut({}));
}

function* ActionWatcher(api) {
  yield takeLatest(AuthTypes.GOOGLE_LOGIN, googleLoginSaga, api);
  yield takeLatest(AuthTypes.FACEBOOK_LOGIN, facebookLoginSaga, api);
  yield takeLatest(AuthTypes.LOGIN_FORM, loginSaga, api);
  yield takeLatest(AuthTypes.LOG_OUT, logOutSaga, api);
  yield takeLatest(AuthTypes.FORGET_PASSWORD, forgetPasswordSaga, api);
}

export default function* rootSaga(api) {
  yield all([ActionWatcher(api)]);
}
