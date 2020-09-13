import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import Slider from '../Slider/Slider';
import './Corousel.scss';
import { API_URL_IMAGES } from '../../constants/constant';
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
          <Slider
            img={API_URL_IMAGES + '/qVygtf2vU15L2yKS4Ke44U4oMdD.jpg'}
            title='Project Power'
            tagline='What would you risk for five minutes of pure power?'
          />
        </Carousel.Item>
        <Carousel.Item>
          <Slider
            img={API_URL_IMAGES + '/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg'}
            title='Joker'
            tagline='During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City'
          />
        </Carousel.Item>
        <Carousel.Item>
          <Slider
            img={API_URL_IMAGES + '/eIqyISB5j99OSRZUuvdN9g2bBsS.jpg'}
            title='The Gentlemen'
            tagline='American expat Mickey Pearson has built a highly profitable marijuana empire in London. '
          />
        </Carousel.Item>
      </Carousel>
    );
  }
}
