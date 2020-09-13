import React, { Component } from 'react';
import CardItem from '../../components/CardItem/CardItem';
import './Favourite.scss';
import * as movieActions from '../../actions/movieAction';
import { connect } from 'react-redux';
class Favourite extends Component {
  constructor(props) {
    super();
    this.state = {
      favourite: null,
    };
  }

  componentDidMount() {
    this.props.dispatch(movieActions.getFavourite());
  }
  componentWillReceiveProps(newProps) {
    this.setState({ favourite: newProps.favourite });
  }

  render() {
    return (
      <div className='site-content-search'>
        <main>
          <div className='search-container'>
            <div className='title'>
              <h3 className='suggestion'> Latest Favourites</h3>
            </div>
            <div className='result'>
              <div className='result-info'>
                {/* <div className='label'>Film & Serial</div> */}
              </div>
              <div className='result-content'>
                <div className='result-container'>
                  {this.state.favourite ? (
                    this.state.favourite.favourite.map((fa, index) => (
                      <CardItem movie={fa} key={index} />
                    ))
                  ) : (
                    <p>No Favourite</p>
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
    favourite: state.movies,
  };
};
export default connect(mapStateToProps)(Favourite);
