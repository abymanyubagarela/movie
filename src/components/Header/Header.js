import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import './Header.scss';
import logo from '../../assets/logo-min.png';

class Header extends Component {
  render() {
    return (
      <Navbar expand='lg'>
        <Navbar.Brand href='#home'>
          <img className='image_header' src={logo} alt='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='#home'>Live</Nav.Link>
            <Nav.Link href='#link'>Movie</Nav.Link>
            <Nav.Link href='#link'>TV Show</Nav.Link>
            <Nav.Link href='#link'>Sport</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl
              type='text'
              placeholder='Search'
              className='mr-sm-2 search-box'
            />
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
