import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';

const sagaMiddleware = createSagaMiddleware({});

const initialState = {};

const enhancers = [];

const middleware = [
    sagaMiddleware
];

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension;

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
    }
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
);

export default {
    ...createStore(
        rootReducer,
        initialState,
        composedEnhancers
    ),
    runSaga: sagaMiddleware.run
}
