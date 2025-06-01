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
