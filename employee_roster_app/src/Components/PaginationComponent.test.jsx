import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PaginationComponent from './PaginationComponent';

describe('PaginationComponent', () => {
    const handlePageChange = jest.fn();

    test('renders without crashing', () => {
        const { getByText } = render(
            <PaginationComponent
                currentPage={1}
                totalPages={5}
                handlePageChange={handlePageChange}
            />
        );

        expect(getByText('Page 1 / 5')).toBeInTheDocument();
    });

    test('calls handlePageChange with the previous page number when the "Prev" button is clicked', () => {
        const { getByText } = render(
            <PaginationComponent
                currentPage={2}
                totalPages={5}
                handlePageChange={handlePageChange}
            />
        );

        fireEvent.click(getByText('Prev'));
        expect(handlePageChange).toHaveBeenCalledWith(1);
    });

    test('calls handlePageChange with the next page number when the "Next" button is clicked', () => {
        const { getByText } = render(
            <PaginationComponent
                currentPage={2}
                totalPages={5}
                handlePageChange={handlePageChange}
            />
        );

        fireEvent.click(getByText('Next'));
        expect(handlePageChange).toHaveBeenCalledWith(3);
    });

    test('disables the "Prev" button on the first page', () => {
        const { getByText } = render(
            <PaginationComponent
                currentPage={1}
                totalPages={5}
                handlePageChange={handlePageChange}
            />
        );

        expect(getByText('Prev')).toBeDisabled();
    });

    test('disables the "Next" button on the last page', () => {
        const { getByText } = render(
            <PaginationComponent
                currentPage={5}
                totalPages={5}
                handlePageChange={handlePageChange}
            />
        );

        expect(getByText('Next')).toBeDisabled();
    });
});
