import React, { Component } from 'react';
import './CardItemPotrait.scss';
class CardItemPotrait extends Component {
  render() {
    return (
      <div className='item'>
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
          <div className='titles'>Holy Moon</div>
          <div className='detail'>
            <div className='subtitle'>Parade Film Pendek</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardItemPotrait;
