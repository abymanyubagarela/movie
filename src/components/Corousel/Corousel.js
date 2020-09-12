import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import Slider from '../Slider/Slider';
import './Corousel.scss';

export default class Corousel extends Component {
  render() {
    const settings = {
      controls: false,
      intervals: 3000,
      indicators: false,
      pause: false,
    };
    return (
      <Carousel {...settings}>
        <Carousel.Item>
          <Slider />
        </Carousel.Item>
        <Carousel.Item>
          <Slider />
        </Carousel.Item>
        <Carousel.Item>
          <Slider />
        </Carousel.Item>
      </Carousel>
      /*
      <div className='corousel-container'>
        <Carousel {...settings}>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src='https://image.tmdb.org/t/p/original/liYc4Z2lszmsLI0qWiOmk5zJCde.jpg'
              alt='First slide'
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src='https://image.tmdb.org/t/p/original/liYc4Z2lszmsLI0qWiOmk5zJCde.jpg'
              alt='Third slide'
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src='https://image.tmdb.org/t/p/original/liYc4Z2lszmsLI0qWiOmk5zJCde.jpg'
              alt='Third slide'
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      */
    );
  }
}
