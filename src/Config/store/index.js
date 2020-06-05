import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import rootSaga from './sagas';

// reducers
import { reducer as AuthReducer } from 'Auth/AuthReducer';


import configureStore from './store';

export const history = createBrowserHistory();
export default () => {
    const rootReducer = combineReducers({
        router: connectRouter(history),
        auth: AuthReducer,
    });
    return configureStore(rootReducer, rootSaga, history);
};
