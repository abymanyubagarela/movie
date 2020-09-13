import React, { Component } from 'react';
import './CardItemPotrait.scss';

import * as moviesActions from '../../actions/movieAction';
import { connect } from 'react-redux';
import { API_URL_IMAGES } from '../../constants/constant';
class CardItemPotrait extends Component {
  constructor(props) {
    super();
  }

  componentWillMount() {
    this.props.dispatch(moviesActions.fetchMovie(this.props.id));
  }

  render() {
    const limit = this.props.limit ? this.props.limit : 10;
    return this.props.movies.movies
      .slice(0, limit)
      .filter((m) => m.backdrop_path !== null)
      .map((movie, index) => (
        <div className='item' key={index}>
          <div className='potrait'>
            <a href={'/detail/' + movie.id}>
              <div className='image'>
                <picture className='picture-tag'>
                  <img src={API_URL_IMAGES + movie.poster_path} alt='' />
                </picture>
              </div>
            </a>
            <div className='titles'>{movie.title}</div>
            <div className='detail'>
              <div className='subtitle'>Release {movie.title}</div>
            </div>
          </div>
        </div>
      ));
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};
export default connect(mapStateToProps)(CardItemPotrait);
