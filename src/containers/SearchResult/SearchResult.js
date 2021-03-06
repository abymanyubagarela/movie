import React, { Component } from 'react';
import CardItem from '../../components/CardItem/CardItem';
import './SearchResult.scss';
import * as movieActions from '../../actions/movieAction';
import { connect } from 'react-redux';
class SearchResult extends Component {
  constructor(props) {
    super();
    this.state = {
      id: props.id,
      find: null,
    };
  }

  componentWillMount() {
    this.props.dispatch(movieActions.findMovie(this.state.id));
  }

  componentWillReceiveProps(newProps) {
    this.setState({ find: newProps.finds });
  }
  
  render() {
    return (
      <div className='site-content-search'>
        <main>
          <div className='search-container'>
            <div className='title'>
              <h3 className='suggestion'>
                {' '}
                Showing result of
                <em> {this.state.id}</em>
              </h3>
            </div>
            <div className='result'>
              <div className='result-info'>
                {/* <div className='label'>Film & Serial</div> */}
              </div>
              <div className='result-content'>
                <div className='result-container'>
                  {this.state.find ? (
                    this.state.find.map((find, index) => (
                      <CardItem movie={find} key={index} />
                    ))
                  ) : (
                    <p>No Query Found</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    finds: state.movies.finds,
  };
};
export default connect(mapStateToProps)(SearchResult);
