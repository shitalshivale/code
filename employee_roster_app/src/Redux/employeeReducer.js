import {
  EMPLOYEE_ACTION_SUCCESS,
  EMPLOYEE_ACTION_SEARCH
} from '../constant';
const initialState = {
  employeeData: null,
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEE_ACTION_SUCCESS:
      return { 
        ...state, 
        employeeData: action.payload 
      };
    case EMPLOYEE_ACTION_SEARCH:
      const getFunc = state.employeeData.map((employee) =>{
        return Object.fromEntries(
          Object.entries(employee).map(([Key,value])=> [Key, value !== null ? value.toString(): ''])
        )
      })

      // filter the converted employee data based on seached query value
      const searched = getFunc.filter((employee)=>{
        const queryAsString= action.query.trim().toLowerCase();
        if(queryAsString !== ''){
          return Object.values(employee).some((value)=>
            value.toLowerCase().includes(queryAsString)
          )
        }
        return false;
      })
      return { 
        ...state, 
        employeeData: searched 
      };
    default:
      return state;
  }
};

export default employeeReducer;