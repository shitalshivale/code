export const fetchEmployees = () => ({ type: 'FETCH_EMPLOYEES' });
export const setEmployees = (data) => ({ type: 'SET_EMPLOYEES', data });

const initialState = {
  employeeData: null,
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_EMPLOYEES':
      return { ...state, employeeData: action.data };
    case 'FETCH_EMPLOYEES':
      return { ...state, employeeData: action.data };
    default:
      return state;
  }
};

export default employeeReducer;