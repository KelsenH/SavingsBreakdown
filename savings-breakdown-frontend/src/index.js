import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import configureStore from './store/configureStore';
import { categories } from './reducers/categoriesReducers'

let initialState = {
  categories: []
}
const store = createStore(categories);

ReactDOM.render(<Provider store = {store}> <App /> </Provider>, document.getElementById('root'));
serviceWorker.unregister();
