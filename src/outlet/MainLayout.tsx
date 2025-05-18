import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="ml-18">
        <Outlet />
      </div>
    </>
  );
}

export default MainLayout;
