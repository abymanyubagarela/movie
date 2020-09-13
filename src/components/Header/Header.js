import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { HashRouter, Link } from 'react-router-dom';
import SearchBox from '../SearchBox/SearchBox';
import './Header.scss';
import logo from '../../assets/logo-min.png';
class Header extends React.Component {
  constructor(props) {
    super();
    this.listener = null;
    this.state = {
      status: 'top',
      scrollClass: 'transparent',
    };
  }

  componentDidMount() {
    this.listener = document.addEventListener('scroll', (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled <= 540) {
        if (this.state.status !== 'transparent') {
          this.setState({ status: 'transparent', scrollClass: 'transparent' });
        }
      } else {
        if (this.state.status !== 'top') {
          this.setState({ status: 'top', scrollClass: '' });
        }
      }
    });
  }
  componentDidUpdate() {
    document.removeEventListener('scroll', this.listener);
  }

  render() {
    return (
      <Navbar expand='lg' className={this.state.scrollClass}>
        <Navbar.Brand href='#'>
          <img className='image_header' src={logo} alt='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <HashRouter basename='/'>
              <Link to='/'>
                <Nav className={this.state.scrollClass}>Discover</Nav>
              </Link>
              <Link to='/'>
                <Nav className={this.state.scrollClass}>Movie</Nav>
              </Link>
              <Link to='/'>
                <Nav className={this.state.scrollClass}>TV Show</Nav>
              </Link>
              <Link to='/favourite'>
                <Nav className={this.state.scrollClass}>Favourite</Nav>
              </Link>
              {/* <Link to='/history'>
              <Nav className={this.state.scrollClass}>History</Nav>
            </Link> */}
              <Nav>
                <SearchBox />
              </Nav>
            </HashRouter>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
