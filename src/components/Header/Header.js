import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import SearchBox from '../SearchBox/SearchBox';
import './Header.scss';
// import logo from '../../assets/logo-min.png';

class Header extends Component {
  render() {
    return (
      <Navbar expand='lg'>
        <Navbar.Brand href='#home'>
          <img className='image_header' src="https://static-web-prod-vidio.akamaized.net/assets/logo/logo-e25db04edf4b340056e97564bcf205d48dd02c9507d7cab5c42d4f0295cfad76.svg" alt='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='#home'>Live</Nav.Link>
            <Nav.Link href='#link'>Movie</Nav.Link>
            <Nav.Link href='#link'>TV Show</Nav.Link>
            <Nav.Link href='#link'>Sport</Nav.Link>
            <Nav.Link href='#link'><SearchBox/></Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
