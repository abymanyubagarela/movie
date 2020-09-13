import React, { Component } from 'react';
import CardItem from '../../components/CardItem/CardItem';
import './History.scss';

class History extends Component {
  constructor(props) {
    super();
  }
  render() {
    const history = this.props.movies;
    return (
      <div className='site-content-search'>
        <main>
          <div className='search-container'>
            <div className='title'>
              <h3 className='suggestion'>Showing your history</h3>
            </div>
            <div className='result'>
              <div className='result-content'>
                <div className='result-container'>
                  {history ? (
                    this.historie.map((historie, index) => (
                      <CardItem movie={historie} key={index} />
                    ))
                  ) : (
                    <p>No Histories Found</p>
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

export default History;
