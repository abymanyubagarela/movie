import React, { Component } from 'react';
import './MovieCard.scss';

class MovieCard extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    return (
      <section className='movie-section'>
        <div className='movie-card'>
          <div className='head'>
            <h2 className='title'>{this.props.title}</h2>
          </div>
          <div className='content'>
            <ul className='home-grid'>
              <li className='item'>
                <div className='home-content'>
                  <a href='/'>
                    <div className='home-content-image'>
                      <picture className='picture-tag'>
                        <img
                          src='https://image.tmdb.org/t/p/original/liYc4Z2lszmsLI0qWiOmk5zJCde.jpg'
                          alt=''
                        />
                      </picture>
                    </div>
                  </a>
                  <div className='titles'>Holy Moon</div>
                  <div className='detail'>
                    <div className='subtitle'>Parade Film Pendek</div>
                  </div>
                </div>
              </li>
              <li className='item'>
                <div className='home-content'>
                  <a href='/'>
                    <div className='home-content-image'>
                      <picture className='picture-tag'>
                        <img
                          src='https://image.tmdb.org/t/p/original/liYc4Z2lszmsLI0qWiOmk5zJCde.jpg'
                          alt=''
                        />
                      </picture>
                    </div>
                  </a>
                  <div className='titles'>Holy Moon</div>
                  <div className='detail'>
                    <div className='subtitle'>Parade Film Pendek</div>
                  </div>
                </div>
              </li>
              <li className='item'>
                <div className='home-content'>
                  <a href='/'>
                    <div className='home-content-image'>
                      <picture className='picture-tag'>
                        <img
                          src='https://image.tmdb.org/t/p/original/liYc4Z2lszmsLI0qWiOmk5zJCde.jpg'
                          alt=''
                        />
                      </picture>
                    </div>
                  </a>
                  <div className='titles'>Holy Moon</div>
                  <div className='detail'>
                    <div className='subtitle'>Parade Film Pendek</div>
                  </div>
                </div>
              </li>
              <li className='item'>
                <div className='home-content'>
                  <a href='/'>
                    <div className='home-content-image'>
                      <picture className='picture-tag'>
                        <img
                          src='https://image.tmdb.org/t/p/original/liYc4Z2lszmsLI0qWiOmk5zJCde.jpg'
                          alt=''
                        />
                      </picture>
                    </div>
                  </a>
                  <div className='titles'>Holy Moon</div>
                  <div className='detail'>
                    <div className='subtitle'>Parade Film Pendek</div>
                  </div>
                </div>
              </li>
              <li className='item'>
                <div className='home-content'>
                  <a href='/'>
                    <div className='home-content-image'>
                      <picture className='picture-tag'>
                        <img
                          src='https://image.tmdb.org/t/p/original/liYc4Z2lszmsLI0qWiOmk5zJCde.jpg'
                          alt=''
                        />
                      </picture>
                    </div>
                  </a>
                  <div className='titles'>Holy Moon</div>
                  <div className='detail'>
                    <div className='subtitle'>Parade Film Pendek</div>
                  </div>
                </div>
              </li>
              <li className='item'>
                <div className='home-content'>
                  <a href='/'>
                    <div className='home-content-image'>
                      <picture className='picture-tag'>
                        <img
                          src='https://image.tmdb.org/t/p/original/liYc4Z2lszmsLI0qWiOmk5zJCde.jpg'
                          alt=''
                        />
                      </picture>
                    </div>
                  </a>
                  <div className='titles'>Holy Moon</div>
                  <div className='detail'>
                    <div className='subtitle'>Parade Film Pendek</div>
                  </div>
                </div>
              </li>
              <li className='item'>
                <div className='home-content'>
                  <a href='/'>
                    <div className='home-content-image'>
                      <picture className='picture-tag'>
                        <img
                          src='https://image.tmdb.org/t/p/original/liYc4Z2lszmsLI0qWiOmk5zJCde.jpg'
                          alt=''
                        />
                      </picture>
                    </div>
                  </a>
                  <div className='titles'>Holy Moon</div>
                  <div className='detail'>
                    <div className='subtitle'>Parade Film Pendek</div>
                  </div>
                </div>
              </li>
              <li className='item'>
                <div className='home-content'>
                  <a href='/'>
                    <div className='home-content-image'>
                      <picture className='picture-tag'>
                        <img
                          src='https://image.tmdb.org/t/p/original/liYc4Z2lszmsLI0qWiOmk5zJCde.jpg'
                          alt=''
                        />
                      </picture>
                    </div>
                  </a>
                  <div className='titles'>Holy Moon</div>
                  <div className='detail'>
                    <div className='subtitle'>Parade Film Pendek</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default MovieCard;
