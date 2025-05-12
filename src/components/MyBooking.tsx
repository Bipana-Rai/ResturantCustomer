import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { useEffect } from "react";
import { getBookingDetail } from "../features/itemSlice";

function MyBooking() {
  const dispatch = useDispatch<AppDispatch>();
  const { bookingDetail } = useSelector((state: RootState) => state.item);
  useEffect(() => {
    dispatch(getBookingDetail());
  }, [dispatch]);
  console.log(bookingDetail)
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
              <p className="text-center text-xl py-2 font-bold">
                Booking Details
              </p>

              <div className="absolute top-3 flex text-2xl gap-3 right-3">
                <div>
                  <MdEdit />
                </div>
                <div className="">
                  <MdDelete />
                </div>
              </div>
              <div className="px-5 flex flex-col gap-3">
                <p>
                  Full Name: <span>{e.fullName}</span>
                </p>
                <p>
                  Phone Number: <span>{e.phNo}</span>
                </p>
                <p>
                  Email: <span>{e.email}</span>
                </p>
                <p>
                  Booking date: <span>{e.bookingDate}</span>
                </p>
                <p>
                  Booking Time: <span>{e.bookingTime}</span>
                </p>
                <p>
                  Booked AT: <span></span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MyBooking;
