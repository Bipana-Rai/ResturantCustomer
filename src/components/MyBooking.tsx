import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { useEffect } from "react";
import { getBookingDetail } from "../features/itemSlice";
import { MdDateRange } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

function MyBooking() {
  const dispatch = useDispatch<AppDispatch>();
  const { bookingDetail } = useSelector((state: RootState) => state.item);
  useEffect(() => {
    dispatch(getBookingDetail());
  }, [dispatch]);
  console.log(bookingDetail);
  return (
    <>
      <div className="pt-18  ">
        <div className="flex flex-col justify-center items-center gap-5 ">
          {bookingDetail?.map((e, i) => (
            <div
              key={i}
              className=" relative md:w-[80%] w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-7 py-3 bg-white rounded-xl"
            >
              <div className="flex justify-between py-2 ">
                <div className="flex gap-3 ">
                  <button className="bg-cyan-500 outline-0 text-gray-200 px-4 rounded-md">
                    Table {e.tableNumber}
                  </button>
                  <button className="border-1 px-5 rounded-md border-purple-300">
                    {e.location}
                  </button>
                   <button className="border-1 px-5 rounded-md border-green-300">
                    {e.members} members
                  </button>
                </div>
                <div className="text-green-700 font-semibold bg-green-200 px-4 py-1 rounded-md">
                  Confirmed
                </div>
              </div>
              <div className="flex items-center gap-50">
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
                <div className="flex flex-col gap-2 ">
                  <p className="text-lg">Customer</p>
                  <div className="flex gap-2 items-center">
                    <FaUser /> <span>{e.fullName}</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <FaPhoneAlt />
                    <span>{e.phNo}</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <MdOutlineMail />
                    <span>{e.email}</span>
                  </div>
                </div>
              </div>
              <div className="flex py-3 px-7 justify-end gap-8">
                <div className="flex justify-center items-center gap-1 w-30 bg-cyan-200 text-blue-600 py-1 rounded-lg  ">
                  <div>
                    {" "}
                    <MdEdit />
                  </div>
                  <p className="font-semibold">Edit</p>
                </div>
                <div className="flex justify-center items-center gap-2 w-45 py-1 rounded-lg  bg-red-200 text-red-500">
                  <div>
                    <MdDelete />
                  </div>
                  <p className="font-semibold">Cancel Booking</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MyBooking;
