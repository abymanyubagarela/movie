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
import SearchResultPage from './pages/SearchResultPage';
function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Switch>
          <Route path='/' exact component={Homepage} />
          <Route path='/home' exact component={Homepage} />
          <Route path='/detail/:id' component={DetailPage} />
          <Route path='/search' exact component={SearchResultPage} />
        </Switch>
      </div>
      {/* <Slider />
      <Homepage />
      <DetailPage />
      <CardItem />
      <CardItem />
      <CardItemPotrait />  */}
    </Router>
  );
}

export default App;
