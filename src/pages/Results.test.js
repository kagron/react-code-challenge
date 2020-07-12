import React from 'react';
import { screen, wait } from '@testing-library/react';
import Results from './Results';
import { rootInitialState, renderWithProviders } from '../utils/testHelpers';
import { getShowsStart } from '../slices/shows/showsSlice';

global.fetch = jest.fn(() =>
    Promise.resolve({
        ok: true,
        json: () => Promise.resolve([])
    })
);

describe('<Results />', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    test('should dispatch fetchShows', () => {
        const { getActionsTypes } = renderWithProviders(
            <Results />,
            {
                ...rootInitialState,
                shows: { ...rootInitialState.shows }
            },
            ['/results?searchTerm=superman']
        );
        // Make sure that the correct action was sent in to store
        expect(getActionsTypes().includes(getShowsStart.type));
    });

    test('should redirect to home page when there is no search term', () => {
        const { history } = renderWithProviders(
            <Results />,
            {
                ...rootInitialState,
                shows: { ...rootInitialState.shows }
            },
            ['/results']
        );
        expect(history.location.pathname).toBe('/');
    });

    test('should redirect to home page when there are errors', () => {
        const { history } = renderWithProviders(
            <Results />,
            {
                ...rootInitialState,
                shows: { ...rootInitialState.shows, error: 'Error!' }
            },
            ['/results?searchTerm=superman']
        );
        expect(history.location.pathname).toBe('/');
    });
});
