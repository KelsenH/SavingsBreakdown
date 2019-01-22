import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { categories } from './reducers/categoriesReducers'

const store = createStore(categories, applyMiddleware(thunk));

ReactDOM.render(<Provider store = {store}> <App /> </Provider>, document.getElementById('root'));
serviceWorker.unregister();
