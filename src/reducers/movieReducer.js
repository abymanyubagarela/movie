import {
  ADD_FAVOURITE,
  FETCH_MOVIES,
  FETCH_MOVIE_DETAIL,
  ADD_HISTORIES,
  FIND_MOVIES,
  GET_FIND_MOVIES,
  GET_FAVOURITES,
} from '../actions/config/action-types';

const initialState = {
  movies: [],
  movie: null,
  favourite: [],
  historie: [],
  finds: [],
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
    case ADD_FAVOURITE:
      return {
        ...state,
        favourite: [...state.favourite, action.payload],
      };
    case ADD_HISTORIES:
      return {
        ...state,
        historie: [...state.historie, action.payload],
      };
    case FIND_MOVIES:
      return {
        ...state,
        finds: action.payload,
      };
    case GET_FIND_MOVIES:
      return {
        ...state,
      };
    case GET_FAVOURITES:
      return {
        ...state,
      };
    default:
      return state;
  }
};
