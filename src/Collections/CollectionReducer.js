import { createReducer } from "reduxsauce";
import { Map } from "immutable";

export const INITIAL_STATE = Map({});

export const reducer = createReducer(INITIAL_STATE, {});
