import React, { useState } from 'react';

function Clients() {
  const [clients, setClients] = useState([]);
  const [form, setForm] = useState({ name: '', email: '', phone: '', notes: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddClient = () => {
    if (!form.name.trim()) return;
    setClients([...clients, form]);
    setForm({ name: '', email: '', phone: '', notes: '' });
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>📋 Kunden verwalten</h2>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} /><br />
      <input name="email" placeholder="E-Mail" value={form.email} onChange={handleChange} /><br />
      <input name="phone" placeholder="Telefon" value={form.phone} onChange={handleChange} /><br />
      <textarea name="notes" placeholder="Notizen" value={form.notes} onChange={handleChange} /><br />
      <button onClick={handleAddClient}>➕ Hinzufügen</button>

      <hr />
      <ul>
        {clients.map((c, i) => (
          <li key={i}>
            <strong>{c.name}</strong><br />
            📧 {c.email} | 📞 {c.phone}<br />
            📝 {c.notes}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Clients;
