import { motion } from "framer-motion";
import { IoLogOut } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import sidebarContent from "../data/sidebarContent";
import { useEffect, useRef } from "react";
interface MainLayoutProps {
  setIsSidebarOpen: (isSidebarOpen: boolean) => void;
  setLogout: (logout: boolean) => void;
}
function Sidebar({ setIsSidebarOpen, setLogout }: MainLayoutProps) {
  const navigate = useNavigate();
  const sidebarRef = useRef<HTMLDivElement>(null);
  const handleClick = (e: string) => {
    setIsSidebarOpen(false);
    navigate(e);
  };
  const handleLogOut = () => {
    setLogout(true);
    setIsSidebarOpen(false);
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setIsSidebarOpen]);
  return (
    <>
      <motion.div
        ref={sidebarRef}
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        exit={{ x: -100 }}
        transition={{ duration: 0.5 }}
        className="fixed   h-[100vh] w-[70px] z-30 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] pt-20 flex flex-col items-center gap-10"
      >
        {sidebarContent.map((e, i) => (
          <div
            className="text-3xl text-gray-700 cursor-pointer flex justify-center h-10 items-center hover:text-cyan-700 w-full"
            title={e.title}
            key={i}
            onClick={() => handleClick(e.path)}
          >
            {e.icon}
          </div>
        ))}
        <div
          className="text-3xl text-gray-700 cursor-pointer "
          onClick={handleLogOut}
        >
          <IoLogOut />
        </div>
      </motion.div>
    </>
  );
}

export default Sidebar;
