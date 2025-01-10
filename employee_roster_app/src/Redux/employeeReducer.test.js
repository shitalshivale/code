import { fetchEmployees, setEmployees, employeeReducer } from './employeeReducer';

describe('Employee Actions', () => {
    test('fetchEmployees action', () => {
        const expectedAction = { type: 'FETCH_EMPLOYEES' };
        expect(fetchEmployees()).toEqual(expectedAction);
    });

    test('setEmployees action', () => {
        const data = [{ id: 1, name: 'John Doe' }];
        const expectedAction = { type: 'SET_EMPLOYEES', data };
        expect(setEmployees(data)).toEqual(expectedAction);
    });
});

describe('Employee Reducer', () => { 
    const initialState = { employeeData: null }; 
    test('should return the initial state', () => { 
        expect(employeeReducer(undefined, {})).toEqual(initialState); 
    }); 
        
    test('should handle SET_EMPLOYEES', () => { 
        const data = [{ id: 1, name: 'John Doe' }]; 
        const action = { type: 'SET_EMPLOYEES', data }; 
        const expectedState = { employeeData: data }; 
        expect(employeeReducer(initialState, action)).toEqual(expectedState); 
    }); 
    
    test('should handle FETCH_EMPLOYEES', () => { 
        const action = { type: 'FETCH_EMPLOYEES', data: [{ id: 1, name: 'Jane Doe' }] };
        const expectedState = { employeeData: action.data }; 
        expect(employeeReducer(initialState, action)).toEqual(expectedState); 
    }); 
});
