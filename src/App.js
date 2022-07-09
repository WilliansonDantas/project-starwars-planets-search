import React from 'react';
import './App.css';
import StarProvider from './context/StarProvider';
import Table from './components/Table';
import Header from './components/Header';

function App() {
  return (
    <StarProvider>
      <Header />
      <Table />
    </StarProvider>
  );
}

export default App;
