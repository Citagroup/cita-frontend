import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EmployeeLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Platzhalter: Loginprüfung – später mit Backend ersetzen
    if (email === "mitarbeiter@cita.de" && password === "passwort") {
      navigate("/employee/time");
    } else {
      alert("Zugangsdaten ungültig");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Mitarbeiter-Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label><br />
          <input value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Passwort:</label><br />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" style={{ marginTop: "1rem" }}>Login</button>
      </form>
    </div>
  );
};

export default EmployeeLogin;
