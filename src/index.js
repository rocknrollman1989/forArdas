import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { rootReduser } from './redusers/rootReduser';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import App from './App';


const store = createStore(rootReduser, applyMiddleware(thunk));

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById('root'));


