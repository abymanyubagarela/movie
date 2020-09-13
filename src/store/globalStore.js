import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/config/rootReducer';
import thunk from 'redux-thunk';

const initialState = {};

const globalStore = () =>
  createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

export default globalStore;

