import React, { Component } from 'react';
import './CardItem.scss';
import { API_URL_IMAGES } from '../../constants/constant';
class CardItem extends Component {
  render() {
    return (
      <div className='item'>
        <div className='card-item-content'>
          <a href={'/detail/'+ this.props.movie.id}>
            <div className='card-item-content-image'>
              <picture className='picture-tag'>
                <img src={API_URL_IMAGES + this.props.movie.backdrop_path} alt='' />
              </picture>
            </div>
          </a>
          <div className='titles'>{this.props.movie.title}</div>
          <div className='detail'>
            <div className='subtitle'>{this.props.movie.title}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardItem;
