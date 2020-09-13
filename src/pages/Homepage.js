import React, { Component } from 'react';
import Corousel from '../components/Corousel/Corousel';
import MovieCard from '../containers/MovieCard/MovieCard';
import MovieCardPotraitrait from '../containers/MovieCardPotrait/MovieCardPotrait';
import * as genreActions from '../actions/genreAction';
import { connect } from 'react-redux';
class Homepage extends Component {
  componentWillMount() {
    this.props.dispatch(genreActions.fetchGenres());
  }

  render() {
    const items = this.props.genres.genres.slice(0,5).map((genre, index) =>
      index % 2 === 0 ? (
        <MovieCard title={genre.name} id={genre.id} key={index} />
      ) : (
        <MovieCardPotraitrait title={genre.name} id={genre.id} key={index} />
      )
    );
    return (
      <section className='home'>
        <Corousel />
        {items}
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    genres: state.genres,
  };
};
export default connect(mapStateToProps)(Homepage);
