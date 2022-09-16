import React from 'react';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import './App.css';
// import './styles/index';

function App() {
  return (
    <div className="Root">
      <Sidebar />

      <Home />
    </div>
  );
}

export default App;
