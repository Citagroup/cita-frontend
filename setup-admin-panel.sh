#!/bin/bash

echo "🔧 Admin-Panel wird eingerichtet ..."

# Ordnerstruktur anlegen
mkdir -p src/admin

# Datei: src/admin/Login.jsx
cat <<EOL > src/admin/Login.jsx
import { useState } from "react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch("https://cita-intern.up.railway.app/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      const data = await res.json();
      localStorage.setItem("adminToken", data.token);
      window.location.href = "/admin/dashboard";
    } else {
      alert("Login fehlgeschlagen");
    }
  };

  return (
    <div>
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="E-Mail" required />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Passwort" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
EOL

# Datei: src/admin/Dashboard.jsx
cat <<EOL > src/admin/Dashboard.jsx
import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("adminToken");
      const res = await fetch("https://cita-intern.up.railway.app/api/employees", {
        headers: { Authorization: \`Bearer \${token}\` }
      });

      if (res.ok) {
        const data = await res.json();
        setEmployees(data);
      } else {
        alert("Nicht autorisiert");
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Mitarbeiterübersicht</h2>
      <ul>
        {employees.map(emp => (
          <li key={emp.id}>
            {emp.name} ({emp.email})
          </li>
        ))}
      </ul>
    </div>
  );
}
EOL

# Datei: src/App.jsx (überschreiben)
cat <<EOL > src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLogin from "./admin/Login";
import AdminDashboard from "./admin/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
EOL

echo "✅ Admin-Seiten wurden erstellt."
echo "📦 Du kannst jetzt committen und pushen:"
echo "   git add ."
echo "   git commit -m 'Add admin login and dashboard'"
echo "   git push"

