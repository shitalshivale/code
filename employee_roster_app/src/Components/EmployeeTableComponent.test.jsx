// HelloWorld.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import EmployeeTableComponent from './EmployeeTableComponent';

const employees=[
  {
    "id": 1,
    "empName": "Deepti",
    "empLastName": "Sharma", 
    "contactNo": "9748117933",
    "address": "56 Sec 27",
    "empAge": 49,
    "jobTitle": "Analyst",
    "dateOfJoining": "2023-10-23",
    "jobDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "empPhoto": "./profile_dummy_img.jpg"
  },
  {
    "id": 2,
    "empName": "Kanika",
    "empLastName": "Singh", 
    "contactNo": "6260859447",
    "address": "10 Sec 2",
    "empAge": 58,
    "jobTitle": "Tester",
    "dateOfJoining": "2023-08-24",
    "jobDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "empPhoto": "./profile_dummy_img.jpg"
  },
]
const currentPage =1;
const employeesPerPage = 5;
const openModal= jest.fn();

describe('Employee table Component', () => {
  test('matches snapshot', () => {
    const { asFragment } = render(
        <EmployeeTableComponent 
            employees={employees} 
            currentPage={currentPage} 
            employeesPerPage={employeesPerPage}
            openModal={openModal}
        />
    );

    // Create a snapshot
    expect(asFragment()).toMatchSnapshot();
  });
  test('checks employee array length', () => {
    const { getAllByRole } = render(
        <EmployeeTableComponent 
            employees={employees} 
            currentPage={currentPage} 
            employeesPerPage={employeesPerPage}
            openModal={openModal}
        />
    );

    // Assuming each employee is rendered in a table row
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const employeeRows = getAllByRole('row'); 
    expect(employeeRows.length).toBe(employees.length + 1); 
});
});