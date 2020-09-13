import React, { Component } from 'react';
import CardItemPotrait from '../../components/CardItemPotrait/CardItemPotrait';
import './MovieCardPotrait.scss';

class MovieCardPotrait extends Component {
  constructor(props) {
    super()
  }
  render() {
    return (
      <section className='home-section'>
        <div className='head'>
          <h2 className='title'> {this.props.title} </h2>
        </div>
        <div className='content'>
          <div className='content-item'>
            <CardItemPotrait/>
          </div>
        </div>
      </section>
    );
  }
}

export default MovieCardPotrait;
