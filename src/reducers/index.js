import { combineReducers } from 'redux';
import showsReducer from '../slices/shows/showsSlice';

export default combineReducers({
    shows: showsReducer
});
