// App.js
import React from 'react';
import Timeline from './Timeline';
import '../styles/style.css';


function App() {
  const events = [
    { date: 'June 1, 2024', description: 'Started the project' },
    { date: 'June 5, 2024', description: 'Added basic frontend components' },
    { date: 'June 10, 2024', description: 'Integrated vertical timeline' },
    // More events...
  ];

  return (
    <div className="App">
      <h1>Project Timeline</h1>
      <Timeline events={events} />
    </div>
  );
}

export default App;
