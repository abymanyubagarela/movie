import React, { Component } from 'react';
import Banner from '../components/Banner/Banner';

class DetailPage extends Component {
  componentDidMount() {
    console.log(this.props.match.params.id);
  }
  render() {
    return <Banner />;
  }
}

export default DetailPage;
