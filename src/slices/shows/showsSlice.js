import { createSlice } from '@reduxjs/toolkit';
import { getTVShowNames } from '../../utils';

export const initialState = {
    searchTerm: null,
    currentShows: [],
    isLoading: false,
    error: null
};
/**
 * Create a slice for Redux toolkit containing the reducers and actions
 * related to shows
 */
const showsSlice = createSlice({
    name: 'shows',
    initialState,
    reducers: {
        getShowsStart(state, action) {
            const { searchTerm } = action.payload;
            state.searchTerm = searchTerm;
            state.isLoading = true;
        },
        getShowsSuccess(state, { payload }) {
            const { shows } = payload;
            state.isLoading = false;
            state.error = null;
            state.currentShows = shows;
        },
        getShowsFailure(state, { payload }) {
            state.isLoading = false;
            state.error = payload;
        }
    }
});

/**
 * Thunk action for retrieving TV Shows
 * @param {Object} args
 * @param {string} args.searchTerm - Search Term
 */
export const fetchShows = ({ searchTerm }) => async (dispatch) => {
    try {
        dispatch(getShowsStart(searchTerm));
        const shows = await getTVShowNames(searchTerm);
        dispatch(getShowsSuccess({ shows }));
    } catch (err) {
        console.error(err);
        dispatch(getShowsFailure(err.toString()));
    }
};

export const { getShowsStart, getShowsSuccess, getShowsFailure } = showsSlice.actions;
export default showsSlice.reducer;
