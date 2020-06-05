// /* eslint-disable no-undef */
import {all, put, takeLatest,} from 'redux-saga/effects';

import {AuthActions, AuthTypes} from "./AuthActions";


export function* facebookLoginSaga(api) {
    console.log("Facebook Login Saga Ejecutada - Provider Updatedd")
    yield put(AuthActions.saveLoginInfo({provider:"facebook"}))
}

function* ActionWatcher(api) {
    yield takeLatest(AuthTypes.FACEBOOK_LOGIN, facebookLoginSaga, api);
}

export default function* rootSaga(api) {
    yield all([ ActionWatcher(api)]);
}
