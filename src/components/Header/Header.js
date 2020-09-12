import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SearchBox from '../SearchBox/SearchBox';
import './Header.scss';
import logo from '../../assets/logo-min.png';

class Header extends Component {
  render() {
    return (
      <Navbar expand='lg'>
        <Navbar.Brand href='#home'>
          <img
            className='image_header'
            src={logo}
            alt='logo'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Link to='/home'>
              <Nav>Live</Nav>
            </Link>
            <Link to='/detail/abc'>
              <Nav>Movie</Nav>
            </Link>
            <Link to='/search'>
              <Nav>TV Show</Nav>
            </Link>
            <Link to='/detail/abc'>
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
