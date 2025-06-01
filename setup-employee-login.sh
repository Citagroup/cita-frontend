#!/bin/bash

echo "🔐 Modul 3: Mitarbeiter-Login wird eingerichtet ..."

mkdir -p src/employee

cat <<EOF > src/employee/Login.jsx
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
EOF

# Update App.jsx Routing
sed -i '/import { BrowserRouter as Router, Routes, Route } from "react-router-dom";/a import EmployeeLogin from "./employee/Login";' src/App.jsx
sed -i '/<Routes>/a \          <Route path="/employee/login" element={<EmployeeLogin />} />' src/App.jsx

echo "✅ Mitarbeiter-Login-Seite erstellt!"
echo "📦 Jetzt committen und pushen:"
echo "   git add ."
echo "   git commit -m 'Add employee login screen'"
echo "   git push"
