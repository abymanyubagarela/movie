import React, { Component } from 'react';
import MovieCardPotrait from '../../containers/MovieCardPotrait/MovieCardPotrait';

import './Banner.scss';
class Banner extends Component {
  render() {
    return (
      <div className='site-content'>
        <main>
          <section>
            <div className='profile-info'>
              <div className='background'>
                <picture className='picture-tag'>
                  <img
                    src='https://image.tmdb.org/t/p/original/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg'
                    alt='First slide'
                  />
                </picture>
              </div>
              <div className='body'>
                <div className='image'>
                  <div>
                    <a href='/'>
                      <picture className='picture-tags'>
                        <img
                          className='photo'
                          src='https://image.tmdb.org/t/p/original/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg'
                          alt='First slide'
                        />
                      </picture>
                    </a>
                  </div>
                </div>
                <div className='details'>
                  <h1 className='title'>Mulan</h1>
                  <div className='rating'>
                    <div className='genre'>
                      <a href='/'>Newly Added</a>
                    </div>
                  </div>
                  <div className='button'>
                    <a href='/' className='button-action watch'>
                      {' '}
                      Tonton Sekarang{' '}
                    </a>
                    <a href='/' className='button-action share'>
                      {' '}
                      Bagikan{' '}
                    </a>
                    <a href='/' className='button-action list'>
                      {' '}
                      Add Daftar{' '}
                    </a>
                  </div>
                  <div className='description'>
                    <p className='desc'>
                      Berlatar di sebuah pulau kecil, Serui di Papua, Hans yang
                      berusia sembilan belas tahun meninggalkan panti asuhan
                      yang selama ini ia sebut rumah untuk pergi ke Jakarta demi
                      menjadi pesepakbola profesional. Namun, kecelakaan membuat
                      mimpi masa kecilnya kandas. Upaya bunuh diri yang gagal
                      membawanya ke pertemuan dengan Mak, pemilik restoran
                      Padang sederhana. Semangkuk kari kepala ikan yang hangat
                      dan belas kasihan Mak mengingatkan Hans akan kampung
                      halamannya. Keinginannya untuk hidup kembali lagi, dan ia
                      meminta untuk bekerja di restoran. Kehadiran Hans memicu
                      penolakan keras dari Parmanto, si juru masak dan pelayan,
                      Natsir. Keadaan menjadi lebih buruk ketika Parmanto
                      memutuskan untuk berhenti dan pindah ke restoran saingan
                      yang terletak tepat di seberang rumah makan padang milik
                      Mak.
                    </p>
                    <p className='desc'>
                      <strong>Director : &nbsp;</strong> Adriyanto Dewo
                    </p>
                    <p className='desc'>
                      <strong>Cast : &nbsp;</strong> Adriyanto Dewo
                    </p>
                  </div>
                  <div className='profile-playlist content'>
                    <hr />
                    <section className='profile-section'>
                      <h2 class='header'>Trailer</h2>
                      <div className='profile-section-items'>
                      <MovieCardPotrait />
                      <MovieCardPotrait />
                      <MovieCardPotrait />                        
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default Banner;
