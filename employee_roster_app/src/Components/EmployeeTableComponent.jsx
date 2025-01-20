import React,{useState} from "react";

const EmployeeTableComponent = ({ employees, currentPage, employeesPerPage, openModal }) => {
  const [sortConfig, setSortConficg] = useState( {key: 'id', direction: 'ascending'})

  const startIndex = (currentPage - 1) * employeesPerPage;
  const endIndex = startIndex + employeesPerPage;

  const paginatedEmployees = employees && employees.slice(startIndex, endIndex);

  const sortedEmployees = React.useMemo(()=>{
    if(paginatedEmployees && paginatedEmployees.length > 0){
      let sortableEmployees = [...paginatedEmployees];
      if(sortConfig !== null) {
        sortableEmployees.sort((a,b)=>{
          if (a[sortConfig.key] < b[sortConfig.key]){
            return sortConfig.direction === 'ascending' ? -1: 1;
          }
          if (a[sortConfig.key] > b[sortConfig.key]){
            return sortConfig.direction === 'ascending' ? 1: -1;
          }
          return 0;
        })
      }
      return sortableEmployees;
    }
  },[paginatedEmployees,sortConfig]);
  
  const handleSort = (key) =>{
    let direction = 'ascending';
    if(sortConfig.key === key && sortConfig.direction === 'ascending'){
        direction= 'descending';
    }
    setSortConficg({key, direction})
  }
  if (!paginatedEmployees) {
    return null; 
  }


  return (
    <>
      <table className="rosterTable">
        <thead>
          <tr>
            <th onClick={()=> handleSort('id')}>
                ID {sortConfig.key === 'id' ? (sortConfig.direction === 'ascending' ? '↑' : '↓'):''}
              </th>
            <th onClick={()=> handleSort('empName')}>
              Name {sortConfig.key === 'empName' ? (sortConfig.direction === 'ascending' ? '↑' : '↓'):''}
              </th>
            <th onClick={()=> handleSort('contactNo')}>
              Contact No {sortConfig.key === 'contactNo' ? (sortConfig.direction === 'ascending' ? '↑' : '↓'):''}
              </th>
            <th onClick={()=> handleSort('address')}>
              Address {sortConfig.key === 'address' ? (sortConfig.direction === 'ascending' ? '↑' : '↓'):''}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedEmployees && sortedEmployees.length > 0 ? sortedEmployees.map((employee) => {
            return (
              <tr key={employee.id} onClick={() => openModal(employee)}>
                <td>{employee.id}</td>
                <td>
                  <img
                    src={employee.empPhoto}
                    alt=''
                    height="30"
                    width="30" />
                  {employee.empName}
                </td>
                <td>{employee.contactNo}</td>
                <td>{employee.address}</td>
              </tr>
            );
          }):(
            <>
              <span> No Record found</span>
            </>
          )}
        </tbody>
      </table>
    </>
  );
};

export default EmployeeTableComponent;