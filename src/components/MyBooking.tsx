import AlertDialogUtils from "@/utils/AlertDialogUtils";
import { useEffect, useState } from "react";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { MdDateRange, MdEdit, MdOutlineMail } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  getBookingDetail,
  getTable
} from "../features/itemSlice";
import { AppDispatch, RootState } from "../store/store";
import EditBookingForm from "./EditBookingForm";

function MyBooking() {
  const dispatch = useDispatch<AppDispatch>();
  const [id, setId] = useState<string>("");
  const [showEditBookingForm, setShowEditBookingForm] = useState(false);
  const { bookingDetail } = useSelector((state: RootState) => state.item);
  const[status,setStatus]=useState("")
  useEffect(() => {
    dispatch(getBookingDetail());
    dispatch(getTable());
  }, [dispatch, setShowEditBookingForm, showEditBookingForm,status]);
  const handleEdit = (id: string) => {
    setId(id);
    setShowEditBookingForm(true);
  };
 
  return (
    <>
      {" "}
      {showEditBookingForm && (
        <div className="fixed top-5 z-30 left-18 backdrop-blur-[1px] h-[100vh] w-[100vw] bg-[#6b626260] flex items-center justify-center">
          <EditBookingForm
            setShowEditBookingForm={setShowEditBookingForm}
            id={id}
          />
        </div>
      )}
      <div className="pt-14  ">
        <p className="text-2xl font-bold text-cyan-600 text-center py-5">
          Booked Table Details
        </p>
        <div className="flex flex-col justify-center items-center gap-5 ">
          {bookingDetail?.map((e, i) => (
            <div
              key={i}
              className=" relative md:w-[80%] w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-7 py-3 bg-white rounded-xl"
            >
              <div className="md:flex md:justify-between py-2 ">
                <div className="flex gap-3 ">
                  <button className="bg-cyan-500 outline-0 text-gray-200 px-4 rounded-md">
                    Table {e.tableNumber}
                  </button>
                  <button className="border-1 px-5 rounded-md border-gray-300">
                    {e.location}
                  </button>
                  <button className="border-1 px-5 rounded-md border-gray-300">
                    {e.members} members
                  </button>
                </div>
                <div className={`${e.status==="booked"?"text-green-700 bg-green-200":"text-red-500 bg-red-200"} font-semibold  px-8 text-sm py-1 rounded-md`}>
                 {e.status}
                </div>
              </div>
              <div className="md:flex items-center justify-between pe-15">
                <div className=" flex flex-col gap-3">
                  <p className=" text-xl py-2 font-bold">Booking Details</p>
                  <div className="flex gap-2 items-center">
                    <MdDateRange /> <span>{e.bookingDate}</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <IoMdTime /> <span>{e.bookingTime}</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    Booked AT: <span>{e.createdAt}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 pt-4 md:pt-0 ">
                  <p className="text-lg">Customer</p>
                  <div className="flex gap-2 items-center">
                    <FaUser /> <span>{e.fullName}</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <FaPhoneAlt />
                    <span>{e.phNo}</span>
                  </div>
                  {e.email && (
                    <div className="flex gap-2 items-center">
                      <MdOutlineMail />
                      <span>{e.email}</span>
                    </div>
                  )}
                </div>
              </div>
              {
                e.status==="booked" &&    <div className="flex py-3 md:px-7 md:justify-end gap-8">
                <div
                  className="flex justify-center items-center gap-1 w-30 bg-cyan-200 text-blue-600 py-1 rounded-lg cursor-pointer  "
                  onClick={() => handleEdit(e._id)}
                >
                  <div>
                    {" "}
                    <MdEdit />
                  </div>
                  <p className="font-semibold">Edit</p>
                </div>
          
                     <AlertDialogUtils setStatus={setStatus} data={e}/>
                
              </div>
              }
           
            </div>
          ))}
        </div>
      </div>

    </>
  );
}

export default MyBooking;
