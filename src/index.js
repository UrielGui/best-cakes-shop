import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './Styles/Globals';
import Home from './Pages/Home';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);