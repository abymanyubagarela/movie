import { FETCH_GENRES } from './config/action-types';
import { API_URL, API_VERSION, API_KEY } from '../constants/constant';

import Axios from 'axios';

export const fetchGenres = () => (dispatch) => {
  const dest = 'genre/movie/list';
  const url = `${API_URL}${API_VERSION}/${dest}?api_key=${API_KEY}`;
  Axios.get(url)
    .then((response) => {
      dispatch({
        type: FETCH_GENRES,
        payload: response.data.genres,
      });
    })
    .catch((e) => {
      throw e;
    });
};

