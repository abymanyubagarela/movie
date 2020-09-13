import { combineReducers } from 'redux';
import genreReducer from '../genreReducer';
import movieReducer from '../movieReducer';

const rootReducer = combineReducers({
  genres:genreReducer,
  movies:movieReducer,
});

export default rootReducer;
