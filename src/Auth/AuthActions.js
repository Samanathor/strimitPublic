import { createActions } from 'reduxsauce';


const { Types, Creators } = createActions({
    facebookLogin: ['payload'],
    login: ['payload'],
    resetState: [''],
    saveLoginInfo: ['payload'],
}, { prefix: 'App/Auth/' });

export const AuthTypes = Types;
export const AuthActions = Creators;