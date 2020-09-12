import React, { Component } from 'react';
import './CardItem.scss';
class CardItem extends Component {
  render() {
    return (
      <div className='item'>
        <div className='card-item-content'>
          <a href='/'>
            <div className='card-item-content-image'>
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
      </div>
    );
  }
}

export default CardItem;
