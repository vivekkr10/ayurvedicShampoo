import { Route, Routes } from "react-router-dom";
import "./App.css";

import LandingPage from "./pages/LandingPage";
import RegisterPage from "./pages/auth/RegisterPage";
import Topbar from "./components/layout/Topbar";

function App() {
  return (
    <Routes>
      {/* Pages WITH Navbar */}
      <Route element={<Topbar />}>
        <Route path="/" element={<LandingPage />} />
      </Route>

      {/* Authentication pages WITHOUT Navbar */}
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
