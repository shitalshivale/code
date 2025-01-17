import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import employeeReducer from './employeeReducer';
import { rootSaga } from './employeeSaga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(employeeReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;


