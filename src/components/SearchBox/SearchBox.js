import React, { Component } from 'react';
import './SearchBox.scss';

class SearchBox extends Component {
  render() {
    return (
      <form className='search-form'>
        <div className='main-search'>
          <input className="no-outline" />
          <span className='submit'>
            <button className='btn button-submit'>
              <img class="icon" src="https://static-web-prod-vidio.akamaized.net/assets/packs/media/icons/search-dark-ba342d45.svg" alt="" />
            </button>
          </span>
        </div>
      </form>
    );
  }
}
export default SearchBox;
