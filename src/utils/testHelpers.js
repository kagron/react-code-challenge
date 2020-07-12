import { render, configure } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import thunk from 'redux-thunk';
import { SnackbarProvider } from 'notistack';

import { initialState as showsInitialState } from '../slices/shows/showsSlice';

export const rootInitialState = {
    shows: showsInitialState
};

/**
 * Render with basic redux + react router providers
 */
export const renderWithProviders = (ui, initialState = rootInitialState, initialEntries = ['/']) => {
    const store = configureStore([thunk])(initialState);
    const history = createMemoryHistory({ initialEntries });
    return {
        ...render(
            <SnackbarProvider maxSnack={3}>
                <Router history={history}>
                    <Provider store={store}>{ui}</Provider>
                </Router>
            </SnackbarProvider>
        ),
        mockStore: store,
        getActionsTypes: () => store.getActions().map((a) => a.type),
        history
    };
};
