import React, {useState, useEffect} from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import EmployeeTableComponent from './Components/EmployeeTableComponent'; 
import Pagination from './Components/PaginationComponent';
import EmpModalCardComponent from './Components/EmpModalCardComponent';
import { COMPANY_ESTABLISH_DATE, COMPANY_MOTO,COMPANY_NAME } from './constant';
import {fetchEmployeePending,searchEmployee} from './Redux/employeeAction';

function App() {
  const dispatch = useDispatch();
  const employeeData = useSelector((state) => state.employeeData);
  const loading = useSelector((state)=>state.employeeData?.loading || false);
  const error = useSelector((state)=> state.employeeData?.error || null);
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
   if(!searchQuery){
    dispatch(fetchEmployeePending());
   }
  }, [searchQuery])

  //handle search for particulat employee
  const handleSearch =()=>{
    dispatch(searchEmployee(searchQuery));
    setCurrentPage(1);
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
        <div className='company-subdetails'>
          <h4> {COMPANY_MOTO}</h4>
          <h4>
            {COMPANY_ESTABLISH_DATE}
          </h4>
        </div>
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
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <EmployeeTableComponent employees={employeeData} currentPage={currentPage} employeesPerPage={employeesPerPage} openModal={openModal} />
      <Pagination currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange} />
      {isModalOpen && (
        <EmpModalCardComponent employee={selectedEmployee} onClose={closeModal} isOpen={isModalOpen} />
      )}
    </div>
  );
}

export default App;
