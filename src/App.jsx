import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AdminLogin from "./admin/Login";
import AdminDashboard from "./admin/Dashboard";
import Employees from "./admin/Employees"; // 👈 NEU
import EmployeeHome from "./employee/Home";
import EmployeeDashboard from "./employee/Dashboard";
import TimeTracking from "./employee/TimeTracking";
import Reports from "./employee/Reports";
import EmployeeLogin from "./employee/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/employees" element={<Employees />} /> {/* 👈 NEU */}

        <Route path="/employee/login" element={<EmployeeLogin />} />
        <Route path="/employee" element={<EmployeeHome />}>
          <Route path="dashboard" element={<EmployeeDashboard />} />
          <Route path="zeit" element={<TimeTracking />} />
          <Route path="reports" element={<Reports />} />
        </Route>

        <Route path="/" element={<Navigate to="/employee/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
