import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import './scss/custom.scss';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App">
      <Header/>
      <Homepage/>
    </div>
  );
}

export default App;
