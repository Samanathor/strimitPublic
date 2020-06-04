
import { createReducer } from 'reduxsauce';
import { Map } from 'immutable';


import { AuthTypes as Types } from './AuthActions';

/* ------------- Initial State ------------ - */
export const INITIAL_STATE = Map({
    loginInfo: {
       email:"a@a.com", provider:"none"
    },
});

const resetState = () => INITIAL_STATE;

const saveLoginInfo = (state, { payload }) => state.merge(Map({ loginInfo: { ...state.get('loginInfo'), ...payload } }));



/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
    [Types.RESET_STATE]: resetState,
    [Types.SAVE_LOGIN_INFO]: saveLoginInfo,
});
