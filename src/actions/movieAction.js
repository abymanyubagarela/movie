import { FETCH_MOVIES, FETCH_MOVIE_DETAIL } from './config/action-types';
import { API_URL, API_VERSION, API_KEY } from '../constants/constant';

import Axios from 'axios';

export const fetchMovie = (genre = '', page = 1, year = 2020) => (dispatch) => {
  const dest = 'discover/movie';
  const url = `${API_URL}${API_VERSION}/${dest}?api_key=${API_KEY}&page=${page}&year=${year}&with_genres=${genre}`;
  Axios.get(url)
    .then((response) => {
      dispatch({
        type: FETCH_MOVIES,
        payload: response.data.results,
      });
    })
    .catch((e) => {
      throw e;
    });
};

export const fetchMovieDetail = (id = '') => (dispatch) => {
  const dest = 'movie';
  const url = `${API_URL}${API_VERSION}/${dest}/${id}?api_key=${API_KEY}`;
  Axios.get(url)
    .then((response) => {
      dispatch({
        type: FETCH_MOVIE_DETAIL,
        payload: response.data,
      });
    })
    .catch((e) => {
      throw e;
    });
};
