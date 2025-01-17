// App.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './App'; // Adjust the import path as necessary
import { fetchEmployeePending, searchEmployee } from './Redux/employeeAction';

const mockStore = configureStore([]);

describe('App Component', () => {
    let store;

    beforeEach(() => {
        store = mockStore({
            employeeData: [
                { id: 1, empName: 'Deepti', empLastName: 'Sharma', empPhoto: 'profile_dummy_img.jpg', jobTitle: 'Analyst', empAge: 30, dateOfJoining: '2023-01-01', jobDescription: 'Description 1' },
                { id: 2, empName: 'Kanika', empLastName: 'Singh', empPhoto: 'profile_dummy_img.jpg', jobTitle: 'Tester', empAge: 28, dateOfJoining: '2023-02-01', jobDescription: 'Description 2' },
                { id: 3, empName: 'John', empLastName: 'Doe', empPhoto: 'profile_dummy_img.jpg', jobTitle: 'Developer', empAge: 35, dateOfJoining: '2023-03-01', jobDescription: 'Description 3' },
                { id: 4, empName: 'Jane', empLastName: 'Doe', empPhoto: 'profile_dummy_img.jpg', jobTitle: 'Designer', empAge: 32, dateOfJoining: '2023-04-01', jobDescription: 'Description 4' },
                { id: 5, empName: 'Alice', empLastName: 'Smith', empPhoto: 'profile_dummy_img.jpg', jobTitle: 'Manager', empAge: 40, dateOfJoining: '2023-05-01', jobDescription: 'Description 5' },
                { id: 6, empName: 'Bob', empLastName: 'Brown', empPhoto: 'profile_dummy_img.jpg', jobTitle: 'Intern', empAge: 22, dateOfJoining: '2023-06-01', jobDescription: 'Description 6' },
            ],
        });

        store.dispatch = jest.fn();
    });


    test('dispatches fetchEmployeePending on initial render', () => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        );

        expect(store.dispatch).toHaveBeenCalledWith(fetchEmployeePending());
    });

    test('searches for an employee', () => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        );

        const searchInput = screen.getByPlaceholderText(/search by name/i);
        fireEvent.change(searchInput, { target: { value: 'Deepti' } });
        fireEvent.click(screen.getByText(/search/i));

        expect(store.dispatch).toHaveBeenCalledWith(searchEmployee('Deepti'));
    });
  });