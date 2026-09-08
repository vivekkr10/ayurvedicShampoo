import PageHeader from "../common/PageHeader";
import { Outlet } from "react-router-dom";

const Topbar = () => {
  return (
    <div>
      <PageHeader />

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Topbar;