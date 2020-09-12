import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import './scss/custom.scss';
import Homepage from './pages/Homepage';
import DetailPage from './pages/DetailPage';
import Slider from './components/Slider/Slider';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Slider/>       */}
      <Homepage/>
      {/* <DetailPage/> */}
    </div>
  );
}

export default App;
