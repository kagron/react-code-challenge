import React from 'react';
import ShowCard from './ShowCard';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../utils/testHelpers';

describe('<ShowCard />', () => {
    test('should display', () => {
        const showObj = {
            show: {
                name: 'Superman',
                image: {
                    medium: 'img'
                }
            }
        };
        renderWithProviders(<ShowCard {...{ showObj }} />);
        expect(screen.getByText(showObj.show.name)).toBeVisible();
    });
});
