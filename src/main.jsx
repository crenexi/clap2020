import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// Set debug in localStorage
if (process.env.NODE_ENV !== 'production') {
  localStorage.setItem('debug', 'mistan-city-app:*');
}

// Render application
const appElm = document.getElementById('root');
ReactDOM.render(<App />, appElm);
