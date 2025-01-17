import {
    fetchEmployeePending,
    fetchEmployeeSuccess,
    fetchEmployeeFailure,
    searchEmployee
} from './employeeAction';
import {
    EMPLOYEE_ACTION_PENDING,
    EMPLOYEE_ACTION_SUCCESS,
    EMPLOYEE_ACTION_FAILURE,
    EMPLOYEE_ACTION_SEARCH
} from '../constant';

describe('Employee Actions', () => {
    it('should create an action to indicate employee fetch is pending', () => {
        const expectedAction = {
            type: EMPLOYEE_ACTION_PENDING
        };
        expect(fetchEmployeePending()).toEqual(expectedAction);
    });

    it('should create an action for successful employee fetch', () => {
        const data = { id: 1, name: 'John Doe' }; // Example data
        const expectedAction = {
            type: EMPLOYEE_ACTION_SUCCESS,
            payload: data
        };
        expect(fetchEmployeeSuccess(data)).toEqual(expectedAction);
    });

    it('should create an action for failed employee fetch', () => {
        const error = 'Error fetching employee'; // Example error message
        const expectedAction = {
            type: EMPLOYEE_ACTION_FAILURE,
            payload: error
        };
        expect(fetchEmployeeFailure(error)).toEqual(expectedAction);
    });

    it('should create an action to search for an employee', () => {
        const query = 'John'; // Example search query
        const expectedAction = {
            type: EMPLOYEE_ACTION_SEARCH,
            query
        };
        expect(searchEmployee(query)).toEqual(expectedAction);
    });
});