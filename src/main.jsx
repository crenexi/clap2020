import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as StoreProvider } from 'react-redux';
import App from './core/App';
import store from './store';
import './loading';

// Set debug in localStorage
if (process.env.NODE_ENV !== 'production') {
  localStorage.setItem('debug', 'mistan-city-app:*');
}

// Render application
const appElm = document.getElementById('root');

// App with store
const app = (
  <StoreProvider store={store}>
    <App />
  </StoreProvider>
);

ReactDOM.render(app, appElm);
