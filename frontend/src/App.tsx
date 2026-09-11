import { Route, Routes } from "react-router-dom";
import "./App.css";

import LandingPage from "./pages/LandingPage";
import RegisterPage from "./pages/auth/RegisterPage";
import Topbar from "./components/layout/Topbar";
import LoginPage from "./pages/auth/LoginPage";
import Sidebar from "./components/layout/Sidebar";
import StudentDashboard from "./pages/dashboard/StudentDashboard";

function App() {
  return (
    <Routes>
      {/* Pages WITH Navbar */}
      <Route element={<Topbar />}>
        <Route path="/" element={<LandingPage />} />
      </Route>

      {/* Dashboard Sidebar */}
      <Route element={<Sidebar />}>
        <Route path="/dashboard" element={<StudentDashboard />} />
      </Route>

      {/* Authentication pages WITHOUT Navbar */}
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
