// App.js
import React from 'react';
import '../styles/style.css'; // Import your custom styles
import HomePage from './HomePage';
import Board from './Board';

function App() {
  return (
    <div className="App">
      <header className="navbar">
        <nav>
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo">Collaborative Project Management Tool</a>
          </div>
        </nav>
      </header>
      <main className="container">
        <HomePage />
        <Board />
      </main>
      <footer className="footer">
        <div className="container">
          <p>Created by Andrew Vu</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
