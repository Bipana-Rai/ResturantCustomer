import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Logout from "@/components/Logout";

function MainLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [logout, setLogout] = useState(false);

  return (
    <>
      {logout && (
        <div className="w-[100vw] backdrop-blur-sm h-[100vh] fixed  top-0   flex items-center z-30 justify-center bg-[#00000085] ">
          <Logout setLogout={setLogout} />
        </div>
      )}
      <Navbar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <AnimatePresence>
        {isSidebarOpen && (
          <Sidebar setIsSidebarOpen={setIsSidebarOpen} setLogout={setLogout} />
        )}
      </AnimatePresence>

      <div className={`${isSidebarOpen && "md:ml-18"}`}>
        <Outlet />
      </div>
    </>
  );
}

export default MainLayout;
