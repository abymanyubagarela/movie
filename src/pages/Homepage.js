import React, { Component } from 'react';
import Corousel from '../components/Corousel/Corousel';
import MovieCard from '../components/MovieCard/MovieCard';

class Homepage extends Component {
  render() {
    return (
      <section className='home-section'>
          <Corousel/>
          <MovieCard title="Baru di Vidio"/>
          <MovieCard title="Cuplikan Film"/>
          <MovieCard title="Sport"/>
          <MovieCard title="Movie"/>
      </section>
    );
  }
}

export default Homepage;
