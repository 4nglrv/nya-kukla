import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { register } from 'swiper/element/bundle';

import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// register Swiper custom elements
register();
