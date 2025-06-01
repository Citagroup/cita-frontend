import React, { useState } from 'react';

function TimeTracking() {
  const [log, setLog] = useState([]);

  const handleCheckIn = () => {
    const entry = { type: 'Kommen', time: new Date().toLocaleString() };
    setLog([...log, entry]);
  };

  const handleCheckOut = () => {
    const entry = { type: 'Gehen', time: new Date().toLocaleString() };
    setLog([...log, entry]);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>🕒 Zeiterfassung</h2>
      <button onClick={handleCheckIn}>✅ Kommen</button>
      <button onClick={handleCheckOut} style={{ marginLeft: '1rem' }}>⛔ Gehen</button>
      <ul>
        {log.map((entry, i) => (
          <li key={i}>{entry.type} um {entry.time}</li>
        ))}
      </ul>
    </div>
  );
}

export default TimeTracking;
