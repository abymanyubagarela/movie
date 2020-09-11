import React, { Component } from 'react';
import './MovieCardPotrait.scss';

class MovieCardPotrait extends Component {
  render() {
    return (
      <section className='home-section'>
        <div className='head'>
          <h2 className='title'> {this.props.title} </h2>
        </div>
        <div className='content'>
          <ul className='home-grid'>
            <li className='item'>
              <div className='potrait'>
                <a href='/'>
                  <div className='image'>
                    <picture className='picture-tag'>
                      <img
                        src='https://image.tmdb.org/t/p/original/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg'
                        alt=''
                      />
                    </picture>
                  </div>
                </a>
                <div class='titles'>Holy Moon</div>
                <div class='detail'>
                  <div class='subtitle'>Parade Film Pendek</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default MovieCardPotrait;
