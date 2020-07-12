import React from 'react';
import ResultsList from './ResultsList';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../utils/testHelpers';

describe('<ResultsList />', () => {
    test('should display a loading indicator when loading', () => {
        const searchTerm = 'superman';
        renderWithProviders(<ResultsList isLoading={true} {...{ searchTerm }} />);
        expect(screen.queryByText(/Showing results/i)).toBeNull();
        expect(screen.queryByText(/There doesn't seem to be any results here.../i)).toBeNull();
    });

    test('should display an info message when theres no results', () => {
        const searchTerm = 'superman';
        renderWithProviders(<ResultsList isLoading={false} {...{ searchTerm }} />);
        expect(screen.getByText(/There doesn't seem to be any results here.../i)).toBeVisible();
        expect(screen.getByText(/Go Back/i)).toBeVisible();
    });

    test('should display show cards when given results', () => {
        const searchTerm = 'superman';
        renderWithProviders(
            <ResultsList
                isLoading={false}
                currentShows={[
                    {
                        show: {
                            name: 'Superman',
                            image: {
                                medium: 'img'
                            }
                        }
                    }
                ]}
                {...{ searchTerm }}
            />
        );
        expect(screen.getByText(/Showing Results for/i)).toBeVisible();
        expect(screen.getByText(`"${searchTerm}"`)).toBeVisible();
        expect(screen.getByText(/Go Back/i)).toBeVisible();
    });
});
