import React from 'react';

// React Router
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

// MUI
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

// Notistack
import { SnackbarProvider } from 'notistack';

// Pages
import Search from './pages/Search';
import Results from './pages/Results';
import NoMatch from './pages/NoMatch';

// Redux && Redux Toolkit
import { Provider as StoreProvider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import ReduxThunk from 'redux-thunk';

// Reducers
import rootReducer from './reducers';

// Components
import MainLayout from './layouts/MainLayout';

const theme = createMuiTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#2274A5' // light blue
        },
        secondary: {
            main: '#E7DFC6' // eggshell
        },
        background: {
            default: '#E9F1F7', // off white
            paper: '#fff'
            // Black: '#131B23'
            // Brown: '#816C61'
        }
    }
});

const store = configureStore({
    reducer: rootReducer,
    middleware: [ReduxThunk]
});

function App() {
    return (
        <StoreProvider store={store}>
            <ThemeProvider theme={theme}>
                <SnackbarProvider maxSnack={3}>
                    <MainLayout>
                        <Router>
                            <Switch>
                                <Route path="/results/:searchTerm" exact={true} component={Results} />
                                <Route path="/" exact={true} component={Search} />
                                <Route path="*" component={NoMatch} />
                            </Switch>
                        </Router>
                    </MainLayout>
                </SnackbarProvider>
            </ThemeProvider>
        </StoreProvider>
    );
}

export default App;
