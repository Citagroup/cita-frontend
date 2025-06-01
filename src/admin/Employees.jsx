import React, { useState } from 'react';

export default function Employees() {
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({ name: '', email: '' });

  const handleAdd = () => {
    if (!newEmployee.name || !newEmployee.email) return;
    setEmployees([...employees, { ...newEmployee, id: Date.now() }]);
    setNewEmployee({ name: '', email: '' });
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>👥 Mitarbeiterverwaltung</h2>
      <input
        type="text"
        placeholder="Name"
        value={newEmployee.name}
        onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={newEmployee.email}
        onChange={(e) => setNewEmployee({ ...newEmployee, email: e.target.value })}
        style={{ marginLeft: '1rem' }}
      />
      <button onClick={handleAdd} style={{ marginLeft: '1rem' }}>➕ Hinzufügen</button>

      <ul>
        {employees.map(emp => (
          <li key={emp.id}>{emp.name} ({emp.email})</li>
        ))}
      </ul>
    </div>
  );
}
