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
      <div className="pt-15 px-10">
        <p>Booked Table</p>

        <div className="flex flex-wrap gap-5">
          {bookingDetail?.map((e, i) => (
            <div
              key={i}
              className=" relative h-[300px] w-[500px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white rounded-xl"
            >
              <div className="flex justify-between items-center px-5 py-3">
                <p className="text-center text-xl py-2 font-bold">
                  Booking Details
                </p>

                <div className="text-green-700 font-semibold bg-green-200 px-4 py-1 rounded-md">
                  Confirmed
                </div>
              </div>

              {/* <div className="absolute top-3 flex text-2xl gap-3 right-3">
                <div>
                  <MdEdit />
                </div>
                <div className="">
                  <MdDelete />
                </div>
              </div> */}
              <div className="px-5 flex flex-col gap-3">
                
                <div className="flex gap-2 items-center">
                  <MdDateRange /> <span>{e.bookingDate}</span>
                </div>
                <div className="flex gap-2 items-center">
                  <IoMdTime /> <span>{e.bookingTime}</span>
                </div>
                <div className="flex gap-2 items-center">
                  Booked AT: <span></span>
                </div>
              </div>
              <div className="flex flex-col gap-2 border-t-1 border-gray-400 border-dashed">
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
          ))}
        </div>
      </div>
    </>
  );
}

export default MyBooking;
