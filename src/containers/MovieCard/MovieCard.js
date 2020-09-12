import React, { Component } from 'react';
import CardItem from '../../components/CardItem/CardItem';
import './MovieCard.scss';

class MovieCard extends Component {
  render() {
    return (
      <div className='site-content'>
        <main>
          <section className='home-section'>
            <div className='head'>
              <h2 className='title'>{this.props.title}</h2>
            </div>
            <div className='content'>
              <CardItem/>
              <CardItem/>
              <CardItem/>
              <CardItem/>
              <CardItem/>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default MovieCard;
