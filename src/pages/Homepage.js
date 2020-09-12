import React, { Component } from 'react';
import Corousel from '../components/Corousel/Corousel';
import MovieCard from '../containers/MovieCard/MovieCard';
import MovieCardPotraitrait from '../containers/MovieCardPotrait/MovieCardPotrait';

class Homepage extends Component {
  render() {
    return (
      <section className='home'>
          <Corousel/>
          {/* <MovieCard title="Baru di Vidio"/>
          <MovieCardPotraitrait title="Cuplikan Film"/> */}
      </section>
    );
  }
}

export default Homepage;
