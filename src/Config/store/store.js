import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
// import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

export default (rootReducer, rootSaga, history) => {
    const middleware = [];
    const enhancers = [];

    /* ------------- Saga Middleware ------------- */
    // const sagaMonitor = process.env.NODE_ENV === 'development'
    //   ? console.tron.createSagaMonitor()
    //   : null
    const sagaMiddleware = createSagaMiddleware();
    const routeMiddleware = routerMiddleware(history);

    /* ------------- Assemble Middlewares ------------- */
    middleware.push(sagaMiddleware);
    middleware.push(routeMiddleware);
    // middleware.push(logger);
    enhancers.push(composeWithDevTools(applyMiddleware(...middleware)));
    if (process.env.NODE_ENV === 'development' && process.env.REACT_APP_REACTOTRON === 'active') {
        enhancers.push(console.tron.createEnhancer()); // eslint-disable-line no-console
    }
    // const composeEnhancers = process.env.NODE_ENV === 'production' ? compose: compose ;

    const store = createStore(rootReducer, compose(...enhancers));
    sagaMiddleware.run(rootSaga);

    return store;
};
