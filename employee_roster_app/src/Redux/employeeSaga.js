import { put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import { fetchEmployeeSuccess } from './employeeAction';

const fetch = async () =>{
  try{
    const response = await axios.get('sample-data.json');
    if(response && response.data){
      return response.data;
    }else{
      return 'error'
    }
  }catch(error){
    return error;
  }
}

function* fetchEmployeesSaga() {
  try {
    const response = yield call(fetch);
    yield put(fetchEmployeeSuccess(response));
  } catch (error) {
    console.error('Error fetching employees:', error);
  }
}

export function* rootSaga() {
  yield takeLatest('EMPLOYEE_ACTION_PENDING', fetchEmployeesSaga);
}