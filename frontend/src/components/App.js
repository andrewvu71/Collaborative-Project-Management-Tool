// src/components/App.js
import React from 'react';
import Board from './Board';
import Greeting from './Greeting';
import '../styles/style.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Collaborative Project Management Tool</h1>
      </header>
      <Greeting />
      <Board />
    </div>
  );
}

export default App;
