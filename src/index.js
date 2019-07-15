import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import manageRestaurant from './reducers/manageRestaurant'

import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(manageRestaurant, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
  latency: 0
}))
// const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
//   latency: 0
// }));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root')
)
