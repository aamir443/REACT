import React, { useState } from 'react';
import './App.css';

function App() {
  const [counters, setCounters] = useState([{ id: 1, count: 0 }]);

  const handleIncrement = (id) => {
    setCounters((prevCounters) =>
      prevCounters.map((counter) =>
        counter.id === id ? { ...counter, count: counter.count + 1 } : counter
      )
    );
  };

  const handleDecrement = (id) => {
    setCounters((prevCounters) =>
      prevCounters.map((counter) =>
        counter.id === id ? { ...counter, count: counter.count - 1 } : counter
      )
    );
  };

  const handleRestart = (id) => {
    setCounters((prevCounters) =>
      prevCounters.map((counter) =>
        counter.id === id ? { ...counter, count: 0 } : counter
      )
    );
  };

  const handleDelete = (id) => {
    setCounters((prevCounters) =>
      prevCounters.filter((counter) => counter.id !== id)
    );
  };

  const handleAddCounter = () => {
    const newCounterId = counters.length > 0 ? counters[counters.length - 1].id + 1 : 1;
    setCounters([...counters, { id: newCounterId, count: 0 }]);
  };

  return (
    <div className="App">
      <button onClick={handleAddCounter}>Add Counter</button>
      {counters.map((counter) => (
        <div key={counter.id}>
          <span>{counter.count}</span>
          <button onClick={() => handleIncrement(counter.id)}>Increment</button>
          <button onClick={() => handleDecrement(counter.id)}>Decrement</button>
          <button onClick={() => handleRestart(counter.id)}>Restart</button>
          <button onClick={() => handleDelete(counter.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;
