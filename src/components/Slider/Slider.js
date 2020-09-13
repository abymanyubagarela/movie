import React, { Component } from 'react';
import './Slider.scss';
class Slider extends Component {
  render() {
    return (
      <div className='wrapper' style={{ background: `url(${this.props.img})` }}>
        <div>
          <h1>{this.props.title ? this.props.title : ''}</h1>
          <h5>{this.props.tagline ? this.props.tagline : ''}</h5>
        </div>
      </div>
    );
  }
}

export default Slider;
