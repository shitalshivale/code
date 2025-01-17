// EmpModalCardComponent.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import EmpModalCardComponent from './EmpModalCardComponent';

describe('EmpModalCardComponent', () => {
    const employee = {
        empName: "Deepti",
        empLastName: "Sharma",
        empAge: 49,
        jobTitle: "Analyst",
        dateOfJoining: "2023-10-23",
        jobDescription: "Lorem ipsum dolor sit amet.",
        empPhoto: "/profile_dummy_img.jpg"
    };

    const onClose = jest.fn();

    test('renders modal with employee information', () => {
      render(<EmpModalCardComponent employee={employee} onClose={onClose} isOpen={true} />);

      // Check if employee name is rendered
      expect(screen.getByText(/Deepti Sharma/i)).toBeInTheDocument();
      // Check if job title is rendered
      expect(screen.getByText(/Job Title: Analyst/i)).toBeInTheDocument();
      // Check if age is rendered
      expect(screen.getByText(/Age: 49/i)).toBeInTheDocument();
      // Check if date of joining is rendered
      expect(screen.getByText(/Date of Joining: 2023-10-23/i)).toBeInTheDocument();
      // Check if job description is rendered
      expect(screen.getByText(/Job Description: Lorem ipsum dolor sit amet./i)).toBeInTheDocument();
      // Check if the image is rendered using alt text
      expect(screen.getByAltText('')).toHaveAttribute('src', '/profile_dummy_img.jpg');
  });
    test('calls onClose when close icon is clicked', () => {
        render(<EmpModalCardComponent employee={employee} onClose={onClose} isOpen={true} />);

        // Click the close icon
        fireEvent.click(screen.getByText('+'));

        // Check if onClose was called
        expect(onClose).toHaveBeenCalledTimes(1);
    });

    test('does not render when isOpen is false', () => {
        const { container } = render(<EmpModalCardComponent employee={employee} onClose={onClose} isOpen={false} />);
        
        // Check if the modal is not rendered
        expect(container).toBeEmptyDOMElement();
    });

    test('calls onClose when clicking outside the modal', () => {
        render(<EmpModalCardComponent employee={employee} onClose={onClose} isOpen={true} />);

        // Click outside the modal
        fireEvent.mouseDown(document);

        // Check if onClose was called
        expect(onClose).toHaveBeenCalledTimes(1);
    });
});