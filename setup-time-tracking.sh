#!/bin/bash

echo "🔧 Modul 2: Zeiterfassung wird eingerichtet ..."

# Ordner erstellen
mkdir -p src/employee

# TimeTracking.jsx
cat <<EOF > src/employee/TimeTracking.jsx
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
EOF

# App.jsx anpassen
sed -i 's|import { BrowserRouter as Router, Route, Routes } from "react-router-dom";|import { BrowserRouter as Router, Route, Routes } from "react-router-dom";\
import TimeTracking from "./employee/TimeTracking";|' src/App.jsx

sed -i '/<Routes>/a \ \ \ \ <Route path="/employee/timetracking" element={<TimeTracking />} />' src/App.jsx

echo "✅ Zeiterfassungs-Seite erstellt!"
echo "📦 Jetzt committen und pushen:"
echo "   git add ."
echo "   git commit -m 'Add employee time tracking'"
echo "   git push"
