import PageHeader from "../common/PageHeader";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

const Topbar = () => {
  return (
    <div>
      <PageHeader />

      <main>
        <Outlet />
      </main>

      <Toaster position="bottom-center" />
    </div>
  );
};

export default Topbar;
