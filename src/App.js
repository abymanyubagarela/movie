import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import './scss/custom.scss';
import Homepage from './pages/Homepage';
import DetailPage from './pages/DetailPage';
import Slider from './components/Slider/Slider';
import CardItem from './components/CardItem/CardItem';
import CardItemPotrait from './components/CardItemPotrait/CardItemPotrait';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Switch>
          <Route path='/' exact component={Homepage} />
          <Route path='/home' component={Homepage} />
          <Route path='/detail' component={DetailPage} />
        </Switch>
        {/* <Slider/>       */}
        {/* <Homepage/> */}
        {/* <DetailPage/> */}
        {/* <CardItem/>
      <CardItem/>
      <CardItemPotrait/> */}
      </div>
    </Router>
  );
}

export default App;
