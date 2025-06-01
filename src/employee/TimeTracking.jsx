import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function TimeTracking() {
  const [log, setLog] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("employee");
    if (!isLoggedIn) {
      navigate("/employee-login");
    }
  }, []);

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

      <button onClick={() => {
        localStorage.removeItem("employee");
        navigate("/employee-login");
      }} style={{ marginTop: '1rem' }}>
        🔒 Logout
      </button>
    </div>
  );
}

export default TimeTracking;
