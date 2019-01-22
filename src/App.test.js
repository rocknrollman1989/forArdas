import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import  rootReducer  from './reducers/rootReducer';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

it('renders without crashing', () => {
const store = createStore(rootReducer, applyMiddleware(thunk));

const div = document.createElement('div');
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, div);
ReactDOM.unmountComponentAtNode(div);
});
