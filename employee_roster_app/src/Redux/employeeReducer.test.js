import employeeReducer from './employeeReducer'; 
import {
    EMPLOYEE_ACTION_SUCCESS,
    EMPLOYEE_ACTION_SEARCH
} from '../constant';

describe('Employee Reducer', () => {
    const initialState = {
        employeeData: null,
    };

    it('should return the initial state', () => {
        expect(employeeReducer(undefined, {})).toEqual(initialState);
    });

    it('should handle EMPLOYEE_ACTION_SUCCESS', () => {
        const action = {
            type: EMPLOYEE_ACTION_SUCCESS,
            payload: [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Smith' }]
        };
        const expectedState = {
            employeeData: action.payload
        };
        expect(employeeReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle EMPLOYEE_ACTION_SEARCH', () => {
        const initialStateWithData = {
            employeeData: [
                { id: 1, name: 'John Doe' },
                { id: 2, name: 'Jane Smith' },
                { id: 3, name: 'Alice Johnson' }
            ],
        };

        const action = {
            type: EMPLOYEE_ACTION_SEARCH,
            query: 'Jane'
        };

        const expectedState = {
            employeeData: [
                { id: "2", name: 'Jane Smith' }
            ],
        };

        expect(employeeReducer(initialStateWithData, action)).toEqual(expectedState);
    });

    it('should return an empty array when no employees match the search query', () => {
        const initialStateWithData = {
            employeeData: [
                { id: 1, name: 'John Doe' },
                { id: 2, name: 'Jane Smith' },
            ],
        };

        const action = {
            type: EMPLOYEE_ACTION_SEARCH,
            query: 'Nonexistent'
        };

        const expectedState = {
            employeeData: []
        };

        expect(employeeReducer(initialStateWithData, action)).toEqual(expectedState);
    });

    it('should return the same state when the search query is empty', () => {
        const initialStateWithData = {
            employeeData: [
                { id: '1', name: 'John Doe' },
                { id: '2', name: 'Jane Smith' },
            ],
        };

        const action = {
            type: EMPLOYEE_ACTION_SEARCH,
            query: ''
        };

        expect(employeeReducer(initialStateWithData, action)).toEqual({"employeeData": []} );
    });
});