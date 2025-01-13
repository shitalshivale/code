import React, {useState, useEffect} from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import EmployeeTableComponent from './Components/EmployeeTableComponent'; 
import Pagination from './Components/PaginationComponent';
import EmpModalCardComponent from './Components/EmpModalCardComponent';
import { fetchEmployees } from './Redux/employeeReducer';
import { COMPANY_ESTABLISH_DATE, COMPANY_MOTO,COMPANY_NAME } from './constant';

function App() {
  const dispatch = useDispatch();
  const employeeData = useSelector((state) => state.employeeData);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const employeesPerPage = 5;

  const openModal = (employee) =>{
    setIsModalOpen(true);
    setSelectedEmployee(employee);
  }

  const closeModal = () =>{
    setIsModalOpen(false);
    setSelectedEmployee(null);
  }


  //fetch all employee data whenever dispatched function invoked
  useEffect(()=>{
    dispatch(fetchEmployees());
  }, dispatch)

  //handle search for particulat employee
  const handleSearch =()=>{
    const searched = employeeData.filter((employee)=>
      Object.values(employee).some((value) => 
        value.toString().toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
    setCurrentPage(1);

    dispatch({
      type: 'SET_EMPLOYEES',
      data: searched
    })
  }

  //handle previous and next page
  const handlePageChange = (page) =>{
    setCurrentPage(page);
 }

 const totalPages = Math.ceil((employeeData?.length || 0)/ employeesPerPage)
 
  
  return (
    <div className="App">
      <div className='company-details'>
        <h1>{COMPANY_NAME}</h1>
        <h4> {COMPANY_MOTO}</h4>
        <h4>
          {COMPANY_ESTABLISH_DATE}
        </h4>
      </div>
      <hr/>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <EmployeeTableComponent employees={employeeData} currentPage={currentPage} employeesPerPage={employeesPerPage} openModal={openModal} />
      <Pagination currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange} />
      {isModalOpen && (
        <EmpModalCardComponent employee={selectedEmployee} onClose={closeModal} isOpen={isModalOpen} />
      )}
    </div>
  );
}

export default App;
