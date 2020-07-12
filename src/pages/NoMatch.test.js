import React from 'react';
import { screen } from '@testing-library/react';
import NoMatch from './NoMatch';
import { renderWithProviders } from '../utils/testHelpers';

describe('<NoMatch />', () => {
    test('should have header and go back link', () => {
        renderWithProviders(<NoMatch />);
        expect(screen.getByText(/404 Page Not Found/i)).toBeVisible();
        expect(screen.getByText(/Go Back/i)).toBeVisible();
    });
});
