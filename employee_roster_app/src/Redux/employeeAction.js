import {
    EMPLOYEE_ACTION_PENDING,
    EMPLOYEE_ACTION_SUCCESS,
    EMPLOYEE_ACTION_FAILURE,
    EMPLOYEE_ACTION_SEARCH
} from '../constant';

export const fetchEmployeePending = () =>{
    return {
        type: EMPLOYEE_ACTION_PENDING
    }
}

export const fetchEmployeeSuccess = (data) =>{
    return {
        type: EMPLOYEE_ACTION_SUCCESS,
        payload: data
    }
}

export const fetchEmployeeFailure = (error) =>{
    return {
        type: EMPLOYEE_ACTION_FAILURE,
        payload: error
    }
}

export const searchEmployee = (query) =>{
    return {
        type: EMPLOYEE_ACTION_SEARCH,
        query
    }
}
