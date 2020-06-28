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
  let messageError = "";
  switch (response.data.notification.code) {
    case "AUTH-E01":
      messageError = "Revisa que la información en los campos sea correcta.";
      break;
    case "AUTH-E03":
      messageError = "El correo o la contraseña es incorrecta.";
      break;
    case "AUTH-E04":
      messageError = "La cuenta esta registrada con redes sociales.";
      break;
    default:
      messageError =
        "Ha ocurrido un error en la conexión, por favor intentalo más tarde.";
      break;
  }
  yield put(
    AuthActions.setErrorLogin({
      message: messageError,
    })
  );
}

export function forgetPasswordSaga(api, { payload }) {
  console.log("password forget" + payload.email);
}

export function* logOutSaga(api) {
  yield put(AuthActions.modifyLogOut({}));
}

export function* registerForm(api, { payload }) {
  const response = yield api.register(payload);
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
  let messageError = "";
  switch (response.data.notification.code) {
    case "AUTH-E02":
      messageError = "El correo ya se encuentra registrado en el sistema.";
      break;
    default:
      messageError =
        "Ha ocurrido un error en la conexión, por favor intentalo más tarde.";
      break;
  }
  yield put(
    AuthActions.setSignupError({
      message: messageError,
    })
  );
}

function* ActionWatcher(api) {
  yield takeLatest(AuthTypes.GOOGLE_LOGIN, googleLoginSaga, api);
  yield takeLatest(AuthTypes.FACEBOOK_LOGIN, facebookLoginSaga, api);
  yield takeLatest(AuthTypes.LOGIN_FORM, loginSaga, api);
  yield takeLatest(AuthTypes.LOG_OUT, logOutSaga, api);
  yield takeLatest(AuthTypes.FORGET_PASSWORD, forgetPasswordSaga, api);
  yield takeLatest(AuthTypes.REGISTER_FORM, registerForm, api);
}

export default function* rootSaga(api) {
  yield all([ActionWatcher(api)]);
}
