import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import StarProvider from './context/StarProvider';

ReactDOM.render(
  <StarProvider>
    <App />
  </StarProvider>,
  document.getElementById('root'),
);
