import { logoutUser } from "@/features/itemSlice";
import { AppDispatch } from "@/store/store";
import axios from "axios"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Logout() {
    const dispatch=useDispatch<AppDispatch>()
    const navigate = useNavigate();
    const handleLogout=async()=>{
        try {
            await axios.post('http://localhost:5000/api/logout',{},{withCredentials:true})
            dispatch( logoutUser())
           navigate('/')
           
            
        } catch (error) {
             console.error('Logout failed:', error);
        }

    }
  return (
    <>
    <div className="h-[300px]  w-[450px] flex flex-col   items-center bg-white rounded-md justify-center px-8">
        <p className=" text-3xl font-bold py-3"> Log Out?</p>
        <p className="pb-5">Are you sure you want to log out?</p>
        <div className="flex py-4 gap-10  ">
            <button className="bg-gray-400 cursor-pointer  text-gray-600 w-30 py-2 text-sm">cancel</button>
            <button  className="bg-cyan-600 cursor-pointer  text-gray-200 w-30 py-2 text-sm" onClick={handleLogout}>Log Out</button>
        </div>

    </div>
   </>
  )
}

export default Logout