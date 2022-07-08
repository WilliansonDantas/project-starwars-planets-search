import React from 'react';
import './App.css';
import StarProvider from './context/StarProvider';
import Table from './components/Table';

function App() {
  return (
    <StarProvider>
      <h1>STAR WARS</h1>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Table />
    </StarProvider>
  );
}

export default App;
