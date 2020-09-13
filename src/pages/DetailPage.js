import React from 'react';
import Banner from '../components/Banner/Banner';
import * as moviesActions from '../actions/movieAction';
import { connect } from 'react-redux';

class DetailPage extends React.Component {
  componentWillMount() {
    this.props.dispatch(
      moviesActions.fetchMovieDetail(this.props.match.params.id)
    );
  }

  render() {
    const movie = this.props.movie;
    return (
      <div>
        {movie !== null && (
          <Banner
            id={this.props.match.params.id}
            movie={movie}
            key={this.props.match.params.id}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movie: state.movies.movie,
  };
};
export default connect(mapStateToProps)(DetailPage);
