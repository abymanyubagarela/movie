import React, { Component } from 'react';
import CardItem from '../../components/CardItem/CardItem';
import CardItemPotrait from '../../components/CardItemPotrait/CardItemPotrait';
import './SearchResult.scss';
class SearchResult extends Component {
  render() {
    return (
      <div className='site-content'>
        <main>
          <div className='search-container'>
            <div className='title'>
              <h3 className='suggestion'>
                {' '}
                Menampilkan hasil pencarian <em>saling</em>
              </h3>
            </div>
            <div className='result'>
              <div className='result-info'>
                <div className='label'>Film & Serial</div>
              </div>
              <div className='result-content'>
                <div className='result-container'>
                  <CardItemPotrait />
                  <CardItemPotrait />
                  <CardItemPotrait />
                  <CardItemPotrait />
                  <CardItemPotrait />
                  <CardItemPotrait />
                  <CardItemPotrait />
                  <CardItemPotrait />
                  <CardItemPotrait />
                  
                </div>
              </div>
            </div>
            <div className='result'>
              <div className='result-info'>
                <div className='label'>Film & Serial</div>
              </div>
              <div className='result-content'>
                <div className='result-container'>
                  <CardItem />
                  <CardItem />
                  <CardItem />
                  <CardItem />
                  <CardItem />
                  <CardItem />
                  <CardItem />
                  <CardItem />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default SearchResult;
