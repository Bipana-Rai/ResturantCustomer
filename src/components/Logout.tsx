import { logoutUser } from "@/features/itemSlice";
import { AppDispatch, persistor } from "@/store/store";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ImCross } from "react-icons/im";
import { IoMdLogOut } from "react-icons/io";
 interface sidebarProps{
    setLogout:(logout:boolean)=>void
 }

function Logout({setLogout}:sidebarProps) {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/logout",
        {},
        { withCredentials: true }
      );
      dispatch(logoutUser());
      await persistor.purge()
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  return (
    <>
      <motion.div 
      initial={{y:-20}}
      animate={{y:0}}
      transition={{duration:0.3,ease:"easeOut"}}
       className="h-[300px] relative  md:w-[400px] w-[350px] flex flex-col    bg-white rounded-md px-8 justify-center items-center">
        <div className="text-5xl ">
           <IoMdLogOut />
        </div>
        <p className=" text-3xl font-bold py-5 text-gray-800"> Log Out ?</p>
        <p className="pb-5">Are you sure you want to log out?</p>
        
        <div className="absolute right-5 top-3 cursor-pointer" onClick={()=>setLogout(false)}>
            <ImCross />
        </div>

        <button
          className="bg-cyan-600 w-full cursor-pointer  text-gray-200 rounded-sm py-2 text-sm"
          onClick={handleLogout}
        >
          Log Out
        </button>
      </motion.div>
    </>
  );
}

export default Logout;
