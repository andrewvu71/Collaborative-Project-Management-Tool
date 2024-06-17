import React, { useState } from 'react';
import Board from './components/Board';
import Greeting from './components/Greeting';
import Timeline from './components/Timeline';
import './styles/style.css';

function App() {
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  return (
    <div className="App">
      <header className="header">
        <h1>Collaborative Project Management Tool</h1>
      </header>
      <Greeting />
      <Board addEvent={addEvent} />
      <Timeline events={events} />
    </div>
  );
}

export default App;
