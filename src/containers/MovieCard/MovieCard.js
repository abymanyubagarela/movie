import React, { Component } from 'react';
import CardItem from '../../components/CardItem/CardItem';
import './MovieCard.scss';
import * as moviesActions from '../../actions/movieAction';
import { connect } from 'react-redux';

class MovieCard extends Component {
  constructor(props) {
    super();
  }
  componentWillMount() {
    this.props.dispatch(moviesActions.fetchMovie(this.props.id));
  }
  render() {
    const items = this.props.movies.movies
      .filter((m) => m.backdrop_path !== null)
      .map((movie, index) => (
        <CardItem movie={movie} key={index}/>
      ));

    return (
      <div className='site-content-card'>
        <main>
          <section className='home-section'>
            <div className='head'>
              <h2 className='title'>{this.props.title}</h2>
            </div>
            <div className='content'>{items}</div>
          </section>
        </main>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};
export default connect(mapStateToProps)(MovieCard);
