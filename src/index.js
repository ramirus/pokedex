import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import './index.scss';
import store from './store'
import rootSaga from './sagas'
import AppContainer from './container/AppContainer';

store.runSaga(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('root')
);
