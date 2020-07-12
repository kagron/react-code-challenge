import React from 'react';
import Search from './Search';
import { screen, fireEvent, act } from '@testing-library/react';
import { renderWithProviders } from '../utils/testHelpers';

describe('<Search />', () => {
    test('should display', () => {
        renderWithProviders(<Search />);
        expect(screen.getByText(/Search TV Shows/i)).toBeVisible();
    });
    test('should go to results page', async () => {
        const searchTerm = 'superman';
        const { history } = renderWithProviders(<Search />);
        fireEvent.change(screen.getByPlaceholderText('TV Show Title'), {
            target: { value: searchTerm }
        });
        expect(screen.getByDisplayValue(searchTerm)).toBeVisible();
        fireEvent.click(screen.getByTestId('submit-search-btn'));
        // screen.debug();
        expect(history.location.pathname).toBe(`/results`);
        expect(history.location.search).toBe(`?searchTerm=${searchTerm}`);
    });
    test('should stay on same page without a search term', async () => {
        const { history } = renderWithProviders(<Search />);
        fireEvent.click(screen.getByTestId('submit-search-btn'));
        expect(history.location.pathname).toBe(`/`);
    });
});
