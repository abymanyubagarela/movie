import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SearchBox.scss';

class SearchBox extends Component {
  constructor(props) {
    super();
    this.state = {
      search: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ search: e.target.value });
  }
  onSubmit = (e) => {
    e.preventDefault();
    window.location.href = 'search';
    // return (<Redirect to={{pathname:'/search'}} />);
  };
  render() {
    return (
      <form className='search-form'>
        <div className='main-search'>
          <input
            className='no-outline'
            name='search'
            type='text'
            onChange={this.onChange}
            value={this.state.search}
          />
          <span className='submit'>
            <button className='btn button-submit'>
              <Link to={'/search/' + this.state.search}>
                <img
                  className='icon'
                  src='https://static-web-prod-vidio.akamaized.net/assets/packs/media/icons/search-dark-ba342d45.svg'
                  alt=''
                />
              </Link>
            </button>
          </span>
        </div>
      </form>
    );
  }
}
export default SearchBox;
