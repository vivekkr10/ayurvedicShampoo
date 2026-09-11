import { Outlet } from "react-router-dom";
import DashboardSidebar from "../common/DashboardSidebar";
import DashboardTopbar from "../common/DashboardTopbar";
import "../../style/sidebar-layout.css"

const Sidebar = () => {
  return (
    <div className="dashboard-layout">
      <DashboardSidebar />

      <div className="dashboard-main">
        <DashboardTopbar />

        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Sidebar;
