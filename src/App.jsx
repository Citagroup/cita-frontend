import EmployeeDashboard from "./employee/Dashboard";
import TimeTracking from "./employee/TimeTracking";
import EmployeeHome from "./employee/Home";
import EmployeeLogin from "./employee/Login"; // nicht vergessen
import Reports from "./employee/Reports"; // NEU
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLogin from "./admin/Login";
import AdminDashboard from "./admin/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="employee" element={<EmployeeHome />}>
          <Route path="dashboard" element={<EmployeeDashboard />} />
          <Route path="zeit" element={<TimeTracking />} />
        </Route>
        <Route path="/employee/login" element={<EmployeeLogin />} />
        <Route path="/employee/timetracking" element={<TimeTracking />} />
        <Route path="/employee/reports" element={<Reports />} /> {/* NEU */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
