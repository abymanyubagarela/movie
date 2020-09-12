import React, { Component } from 'react';
import CardItemPotrait from '../../components/CardItemPotrait/CardItemPotrait';
import './MovieCardPotrait.scss';

class MovieCardPotrait extends Component {
  render() {
    return (
      <section className='home-section'>
        <div className='head'>
          <h2 className='title'> {this.props.title} </h2>
        </div>
        <div className='content'>
          <CardItemPotrait/>
        </div>
      </section>
    );
  }
}

export default MovieCardPotrait;
