import {
  FETCH_MOVIES,
  FETCH_MOVIE_DETAIL,
} from '../actions/config/action-types';

const initialState = {
  movies: [],
  movie: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case FETCH_MOVIE_DETAIL:
      return {
        ...state,
        movie: action.payload,
      };
    default:
      return state;
  }
};
