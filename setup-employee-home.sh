#!/bin/bash

echo "🔧 Modul 4: Mitarbeiter-Startseite mit Navigation wird eingerichtet ..."

# Home.jsx erstellen
cat <<EOF > src/employee/Home.jsx
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function EmployeeHome() {
  return (
    <div>
      <h2>Mitarbeiterbereich</h2>
      <nav>
        <ul>
          <li><Link to="dashboard">Dashboard</Link></li>
          <li><Link to="zeit">Zeiterfassung</Link></li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}
EOF

# Routing ergänzen
sed -i '/<Routes>/a \
      <Route path="employee" element={<EmployeeHome />}>\
        <Route path="dashboard" element={<EmployeeDashboard />} />\
        <Route path="zeit" element={<TimeTracking />} />\
      </Route>' src/App.jsx

# Import hinzufügen (wenn nicht vorhanden)
grep -q 'import EmployeeHome' src/App.jsx || sed -i '1i import EmployeeHome from "./employee/Home";' src/App.jsx
grep -q 'import TimeTracking' src/App.jsx || sed -i '1i import TimeTracking from "./employee/TimeTracking";' src/App.jsx
grep -q 'import EmployeeDashboard' src/App.jsx || sed -i '1i import EmployeeDashboard from "./employee/Dashboard";' src/App.jsx

echo "✅ Navigation erstellt!"
echo "📦 Jetzt committen und pushen:"
echo "   git add ."
echo "   git commit -m 'Add employee home navigation'"
echo "   git push"
