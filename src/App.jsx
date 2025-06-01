import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login onLogin={setToken} />} />
        <Route path="/dashboard/*" element={token ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
} 

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await fetch("https://dein-backend-url.com/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (data.token) {
        localStorage.setItem("token", data.token);
        onLogin(data.token);
      } else {
        alert("Login fehlgeschlagen");
      }
    } catch (err) {
      alert("Serverfehler beim Login");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-xl w-80">
        <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
        <input
          type="email"
          placeholder="E-Mail"
          className="w-full p-2 border rounded mb-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Passwort"
          className="w-full p-2 border rounded mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Einloggen
        </button>
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-blue-800 text-white p-4">
        <h2 className="text-2xl font-bold mb-4">Menü</h2>
        <ul className="space-y-2">
          <li><a href="/dashboard/zeiten">Zeiterfassung</a></li>
          <li><a href="/dashboard/immobilien">Immobilien</a></li>
          <li><a href="/dashboard/berichte">Berichte</a></li>
          <li><a href="/dashboard/kunden">Kunden</a></li>
        </ul>
      </aside>
      <main className="flex-1 p-6 bg-gray-100">
        <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
        <p>Willkommen! Bitte wähle einen Bereich im Menü.</p>
      </main>
    </div>
  );
}

export default App;
