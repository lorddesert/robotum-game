import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './containers/App';

// Css
import './styles/Display.css';
import './styles/Header.css';
import './styles/reset.css';
import './styles/App.css';
import './styles/animation.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)