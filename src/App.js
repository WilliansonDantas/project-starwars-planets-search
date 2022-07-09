import React from 'react';
import './App.css';
import StarProvider from './context/StarProvider';
import Table from './components/Table';

function App() {
  return (
    <StarProvider>
      <Table />
    </StarProvider>
  );
}

export default App;
