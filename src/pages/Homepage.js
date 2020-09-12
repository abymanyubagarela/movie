import React, { Component } from 'react';
import Corousel from '../components/Corousel/Corousel';
import MovieCard from '../components/MovieCard/MovieCard';
import MovieCardPotrait from '../components/MovieCardPotrait/MovieCardPotrait';

class Homepage extends Component {
  render() {
    return (
      <section className='home'>
          <Corousel/>
          <MovieCard title="Baru di Vidio"/>
          <MovieCardPotrait title="Cuplikan Film"/>
      </section>
    );
  }
}

export default Homepage;
