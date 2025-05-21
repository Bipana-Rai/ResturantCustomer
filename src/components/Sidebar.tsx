import { IoLogOut } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import sidebarContent from "../data/sidebarContent";
import { useState } from "react";
import Logout from "./Logout";
function Sidebar() {
  const [logout, setLogout] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      {logout && (
        <div className="w-[100vw] h-[100vh] fixed  top-0   flex items-center z-30 justify-center bg-[#00000085] ">
          <Logout setLogout={setLogout}/>
        </div>
      )}
      <div className="fixed hidden   h-[100vh] w-[70px] bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] pt-20 flex flex-col items-center gap-10">
        {sidebarContent.map((e, i) => (
          <div
            className="text-3xl text-gray-700 cursor-pointer flex justify-center h-10 items-center hover:text-cyan-700 w-full"
            title={e.title}
            key={i}
            onClick={() => navigate(e.path)}
          >
            {e.icon}
          </div>
        ))}
        <div
          className="text-3xl text-gray-700 cursor-pointer "
          onClick={() => setLogout(true)}
        >
          <IoLogOut />
        </div>
      </div>
    </>
  );
}

export default Sidebar;
