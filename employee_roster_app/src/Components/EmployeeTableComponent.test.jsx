import React from 'react';
import { shallow } from 'enzyme';
import EmployeeTableComponent from './EmployeeTableComponent';

describe('EmployeeTableComponent', () => {
  const employees = [
    { id: 1, empName: 'John Doe', contactNo: '1234567890', address: '123 Street', empPhoto: 'john.jpg' },
    { id: 2, empName: 'Jane Smith', contactNo: '0987654321', address: '456 Avenue', empPhoto: 'jane.jpg' }
  ];
  const currentPage = 1;
  const employeesPerPage = 1;
  const openModal = jest.fn();

  it('renders without crashing', () => {
    const wrapper = shallow(<EmployeeTableComponent employees={employees} currentPage={currentPage} employeesPerPage={employeesPerPage} openModal={openModal} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('displays the correct number of employees per page', () => {
    const wrapper = shallow(<EmployeeTableComponent employees={employees} currentPage={currentPage} employeesPerPage={employeesPerPage} openModal={openModal} />);
    expect(wrapper.find('tbody tr')).toHaveLength(employeesPerPage);
  });

  it('calls openModal with the correct employee data when a row is clicked', () => {
    const wrapper = shallow(<EmployeeTableComponent employees={employees} currentPage={currentPage} employeesPerPage={employeesPerPage} openModal={openModal} />);
    wrapper.find('tbody tr').at(0).simulate('click');
    expect(openModal).toHaveBeenCalledWith(employees[0]);
  });
});
