import React, { useEffect } from 'react';

// React Router
import { useHistory } from 'react-router-dom';

// Redux
import { useSelector, useDispatch } from 'react-redux';

// Slices
import { fetchShows } from '../slices/shows/showsSlice';

// Notistack
import { useSnackbar } from 'notistack';
import ResultsList from '../components/ResultsList';

// Custom Hook
import useQuery from '../hooks/useQuery';

const Results = () => {
    // React Router Hooks
    const query = useQuery();
    const searchTerm = query.get('searchTerm') || '';
    const history = useHistory();

    // Redux hooks
    const { isLoading, currentShows, error: showsError } = useSelector((state) => state.shows);
    const dispatch = useDispatch();

    // Notistack
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        if (!searchTerm) {
            enqueueSnackbar('Please enter a valid input character', { variant: 'error' });
            history.push('/');
        } else {
            dispatch(fetchShows({ searchTerm }));
        }
    }, [searchTerm, dispatch, enqueueSnackbar, history]);

    useEffect(() => {
        if (showsError) {
            enqueueSnackbar(showsError, { variant: 'error' });
            history.push('/');
        }
    }, [showsError, enqueueSnackbar, history]);

    /**
     * Part 2: Note that any TV show that does not have a medium image should be skipped.
     */
    const filteredShows = currentShows.filter((showObj) => showObj.show.image && showObj.show.image.medium);

    return (
        <div>
            <ResultsList {...{ searchTerm, isLoading, currentShows: filteredShows }} />
        </div>
    );
};

export default Results;
