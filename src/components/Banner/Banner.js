import React from 'react';
import Slider from '../Slider/Slider';
import { API_URL_IMAGES } from '../../constants/constant';

import './Banner.scss';
import CardItemPotrait from '../CardItemPotrait/CardItemPotrait';
class Banner extends React.Component {
  constructor(props) {
    super();
    this.state = {
      id: props.id,
      movie: props.movie,
    };
  }

  render() {
    return (
      <div className='site-content' key={this.state.movie.id}>
        <Slider
          img={API_URL_IMAGES + this.state.movie.backdrop_path}
          title={this.state.movie.title}
          tagline={this.state.movie.tagline}
        />
        <div className='main'>
          <section>
            <div className='profile-info'>
              {/* <div className='background'>
                <picture className='picture-tag'>
                  <img
                    src='https://image.tmdb.org/t/p/original/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg'
                    alt='First slide'
                  />
                </picture>
              </div> */}
              <div className='body'>
                <div className='image'>
                  <div>
                    <a href='/'>
                      <picture className='picture-tags'>
                        <img
                          className='photo'
                          src={API_URL_IMAGES + this.state.movie.poster_path}
                          alt=''
                        />
                      </picture>
                    </a>
                  </div>
                </div>
                <div className='details'>
                  <h1 className='title'>{this.state.movie.title}</h1>
                  <div className='rating'>
                    <div className='genre'>
                      {this.state.movie.genres.map((g) => (
                        <span key={g.id}> {g.name}</span>
                      ))}
                    </div>
                  </div>
                  <div className='button'>
                    <button className='button-action watch'>
                      {' '}
                      Add to Favourite
                    </button>
                  </div>
                  <div className='description'>
                    <p className='desc'>{this.state.movie.overview}</p>
                    {/* <p className='desc'>
                      <strong>Director : &nbsp;</strong> Adriyanto Dewo
                    </p>
                    <p className='desc'>
                      <strong>Cast : &nbsp;</strong> Adriyanto Dewo
                    </p> */}
                  </div>
                  <div className='profile-playlist content'>
                    <hr />
                    <section className='profile-section'>
                      <h2 className='header'>Populars</h2>
                      <div className='profile-section-items'>
                        <CardItemPotrait limit='3' />
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Banner;
