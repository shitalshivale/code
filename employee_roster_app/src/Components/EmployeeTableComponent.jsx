import React from "react";

const EmployeeTableComponent = ({ employees, currentPage, employeesPerPage, openModal }) => {

  const startIndex = (currentPage - 1) * employeesPerPage;
  const endIndex = startIndex + employeesPerPage;

  const paginatedEmployees = employees && employees.slice(startIndex, endIndex);
  
  if (!paginatedEmployees) {
    return null; 
  }


  return (
    <table className="rosterTable">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Contact No</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {paginatedEmployees && paginatedEmployees.map((employee) => {
            return(
                <tr key={employee.id} onClick={() => openModal(employee)}>
                <td>{employee.id}</td>
                <td>
                  <img
                    src={"/" + employee.empPhoto}
                    alt=''
                    height="30"
                    width="30"
                  />
                  {employee.empName}
                </td>
                <td>{employee.contactNo}</td>
                <td>{employee.address}</td>
              </tr>
            );
        })}
      </tbody>
    </table>
  );
};

export default EmployeeTableComponent;