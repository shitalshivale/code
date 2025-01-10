import { put, takeLatest, call } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import { fetchEmployeesSaga } from './employeeSaga';
import { setEmployees } from './employeeReducer';

// Mocking the fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([{ id: 1, name: 'John Doe' }]),
  })
);

describe('fetchEmployeesSaga', () => {
  it('fetches employees and dispatches setEmployees action', () => {
    return expectSaga(fetchEmployeesSaga)
      .provide([[call(fetch, '/sample-data.json'), global.fetch()]])
      .put(setEmployees([{ id: 1, name: 'John Doe' }]))
      .run();
  });

  it('handles errors gracefully', () => {
    global.fetch.mockImplementationOnce(() => Promise.reject(new Error('Fetch failed')));

    return expectSaga(fetchEmployeesSaga)
      .provide([[call(fetch, '/sample-data.json'), global.fetch()]])
      .run()
      .then(result => {
        expect(result.effects.call).toEqual([]);
        expect(console.error).toHaveBeenCalledWith('Error fetching employees:', new Error('Fetch failed'));
      });
  });
});
