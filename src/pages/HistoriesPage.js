import React, { Component } from 'react';
import History from '../containers/History/History';
import { connect } from 'react-redux';
import * as genreActions from '../actions/genreAction';

class HistoriesPage extends Component {
  componentWillMount() {
    this.props.dispatch(genreActions.fetchGenres());
  }
  render() {
    return <History data={this.props.movies} />;
  }
}

const mapStateToProps = (state) => {
  return {
    historie: state.movies.historie,
  };
};
export default connect(mapStateToProps)(HistoriesPage);
