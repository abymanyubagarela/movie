import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SearchBox from '../SearchBox/SearchBox';
import './Header.scss';
// import logo from '../../assets/logo-min.png';

class Header extends Component {
  render() {
    return (
      <Navbar expand='lg'>
        <Navbar.Brand href='#home'>
          <img
            className='image_header'
            src='https://static-web-prod-vidio.akamaized.net/assets/logo/logo-e25db04edf4b340056e97564bcf205d48dd02c9507d7cab5c42d4f0295cfad76.svg'
            alt='logo'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Link to='/home'>
              <Nav>Live</Nav>
            </Link>
            <Link to='/detail'>
              <Nav>Movie</Nav>
            </Link>
            <Link>
              <Nav>TV Show</Nav>
            </Link>
            <Link>
              <Nav>Sport</Nav>
            </Link>
            <Nav>
              <SearchBox />
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
