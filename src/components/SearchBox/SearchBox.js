import React, { Component } from 'react';
import './SearchBox.scss';

class SearchBox extends Component {
  render() {
    return (
      <form className='search-form'>
        <div className='main-search'>
          <input className='input form-control' />
          <span className='submit'>
            <button className='btn button-submit'>
              <i className="icon-search"></i>
            </button>
          </span>
        </div>
      </form>
    );
  }
}
export default SearchBox;
