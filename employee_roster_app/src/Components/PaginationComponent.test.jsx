// PaginationComponent.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PaginationComponent from './PaginationComponent';

describe('PaginationComponent', () => {
    const handlePageChange = jest.fn();

    test('renders correctly with given props', () => {
        render(<PaginationComponent currentPage={1} totalPages={5} handlePageChange={handlePageChange} />);

        // Check if the current page and total pages are displayed correctly
        expect(screen.getByText(/Page 1 \/ 5/i)).toBeInTheDocument();

        // Check if the Prev button is disabled
        expect(screen.getByRole('button', { name: /prev/i })).toBeDisabled();

        // Check if the Next button is enabled
        expect(screen.getByRole('button', { name: /next/i })).toBeEnabled();
    });

    test('handles page change when Next button is clicked', () => {
        render(<PaginationComponent currentPage={1} totalPages={5} handlePageChange={handlePageChange} />);

        // Click the Next button
        fireEvent.click(screen.getByRole('button', { name: /next/i }));

        // Check if handlePageChange was called with the correct argument
        expect(handlePageChange).toHaveBeenCalledWith(2);
    });

    test('handles page change when Prev button is clicked', () => {
        render(<PaginationComponent currentPage={2} totalPages={5} handlePageChange={handlePageChange} />);

        // Click the Prev button
        fireEvent.click(screen.getByRole('button', { name: /prev/i }));

        // Check if handlePageChange was called with the correct argument
        expect(handlePageChange).toHaveBeenCalledWith(1);
    });

    test('disables Next button on the last page', () => {
        render(<PaginationComponent currentPage={5} totalPages={5} handlePageChange={handlePageChange} />);

        // Check if the Next button is disabled
        expect(screen.getByRole('button', { name: /next/i })).toBeDisabled();
    });

    test('disables Prev button on the first page', () => {
        render(<PaginationComponent currentPage={1} totalPages={5} handlePageChange={handlePageChange} />);

        // Check if the Prev button is disabled
        expect(screen.getByRole('button', { name: /prev/i })).toBeDisabled();
    });
});