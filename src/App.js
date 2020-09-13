import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import './scss/custom.scss';
import Homepage from './pages/Homepage';
import DetailPage from './pages/DetailPage';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import SearchResultPage from './pages/SearchResultPage';
import globalStore from './store/globalStore';
import { Provider } from 'react-redux';

const store = globalStore();
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Redirect to='/home' />
            </Route>
            <Route path='/home' exact component={Homepage} />
            <Route path='/detail/:id' component={DetailPage} />
            <Route path='/search' exact component={SearchResultPage} />
            <Route path='/favourite' exact component={SearchResultPage} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
