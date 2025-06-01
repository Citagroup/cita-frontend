import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("adminToken");
      const res = await fetch("https://cita-intern.up.railway.app/api/employees", {
        headers: { Authorization: `Bearer ${token}` }
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
