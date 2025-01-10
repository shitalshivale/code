import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import employeeReducer from './Redux/employeeReducer';
import { rootSaga } from './Redux/employeeSaga';
import './index.css';
import App from './App';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(employeeReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


