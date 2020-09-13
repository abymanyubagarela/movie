/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './CardItem.scss';
import { API_URL_IMAGES } from '../../constants/constant';
import { Link } from 'react-router-dom';
class CardItem extends Component {
  render() {
    return (
      <div className='item'>
        <div className='card-item-content'>
          <div>
            <Link to={'/detail/' + this.props.movie.id}>
              <div className='card-item-content-image'>
                <picture className='picture-tag'>
                  <img
                    src={API_URL_IMAGES + this.props.movie.backdrop_path}
                    alt=''
                  />
                </picture>
              </div>
            </Link>
          </div>
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
