import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { categories } from './reducers/categoriesReducers'

const store = createStore(categories);

ReactDOM.render(<Provider store = {store}> <App /> </Provider>, document.getElementById('root'));
serviceWorker.unregister();
