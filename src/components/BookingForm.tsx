import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  addBookingData,
  BookedData,
  editTableStatus,
} from "../features/itemSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";

interface TableCardProps {
  number: string;
  location?: string;
  id: string;
  setShowBookingForm: (showBookingForm: boolean) => void;
}
function BookingForm({
  number,
  id,
  location,
  setShowBookingForm,
}: TableCardProps) {
  const dispatch = useDispatch<AppDispatch>();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookedData>();
  useEffect(() => {
    reset({ tableNumber: Number(number), location: location });
  }, [number, location, reset]);
  const onSubmit = (data: BookedData) => {
    const transformedData = { ...data };
    dispatch(addBookingData(transformedData));
    dispatch(editTableStatus({ id, data: "booked" }));
    setShowBookingForm(false)
    console.log(transformedData);
  };
  return (
    <div className="anime  w-[500px] rounded-xl bg-white px-5 shadow-[0_3px_10px_rgb(0,0,0,0.1)]">
      <p className="text-2xl text-cyan-700 font-bold text-center">Booking</p>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col leading-1">
          <div>
            <label className=" text-cyan-800 font-bold">Table : </label>
            <input
              className=" outline-0"
              type="text "
              {...register("tableNumber")}
              readOnly
            />
          </div>
          <input
            className="text-sm  outline-0 text-gray-700 
        font-semibold font-serif"
            readOnly
            {...register("location")}
          />
        </div>

        <div className="flex flex-col  pb-1">
          <label htmlFor="">Full Name </label>
          <input
            type="text"
            className="border-1 border-gray-500 rounded-md px-2 text-sm py-1"
            {...register("fullName", { required: true })}
            placeholder="Enter Full Name"
          />
          {errors.fullName && errors.fullName.type === "required" && (
            <span className="text-sm text-red-500">
              Please enter number of people
            </span>
          )}
        </div>
        <div className="flex flex-col  pb-1">
          <label htmlFor="">Phone No </label>
          <input
            type="tel"
            className="border-1 border-gray-500 rounded-md px-2 text-sm py-1"
            placeholder="Enter phone no"
            {...register("phNo", {
              required: "Phone number is required",
              pattern: {
                value: /^\d{10}$/,
                message: "Invalid phone number",
              },
            })}
          />
          {errors.phNo && (
            <span className="text-sm text-red-500">{errors.phNo.message}</span>
          )}
        </div>
        <div className="flex flex-col pb-1">
          <label htmlFor="">Email </label>
          <input
            type="text"
            className="border-1 border-gray-500 rounded-md px-2 text-sm py-1"
            placeholder="Enter email"
            {...register("email", {
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email && (
            <span className="text-sm text-red-500">{errors.email.message}</span>
          )}
        </div>
        <div className="flex flex-col  pb-1">
          <label htmlFor="">Number of people </label>
          <input
            type="number"
            className="border-1 border-gray-500 rounded-md px-2 text-sm py-1"
            placeholder="Enter Number of people"
            {...register("members", {
              required: "Number of people is required",
              min: { value: 1, message: "Must be at least 1" },
              max: { value: 10, message: "Maximum 10 people" },
            })}
          />
          {errors.members && (
            <span className="text-sm text-red-500">
              {errors.members.message}
            </span>
          )}
        </div>
        <div className="py-1 flex gap-4">
          <label htmlFor="">Reservation Date</label>
          <input
            type="date"
            className="border-1 border-gray-500 rounded-md py-1 text-sm px-2 "
            {...register("bookingDate", { required: true })}
          />
          {errors.bookingDate && errors.bookingDate.type === "required" && (
            <span className="text-red-600 text-sm">Date is required</span>
          )}
        </div>
        <div className="py-2 flex gap-4">
          <label htmlFor="">Reservation time</label>
          <input
            type="time"
            className="border-1 border-gray-500 rounded-md py-1 text-sm px-2 "
            {...register("bookingTime", { required: true })}
          />
          {errors.bookingTime && errors.bookingTime.type === "required" && (
            <span className="text-red-600 text-sm">time is required</span>
          )}
        </div>
        <div className="flex justify-between py-2 px-10">
          <button
            className="px-8 text-sm bg-red-500 text-gray-200 py-1 rounded-md cursor-pointer"
            onClick={() => setShowBookingForm(false)}
          >
            {" "}
            Cancel
          </button>
          <button
            type="submit"
            className="px-8 text-sm cursor-pointer bg-cyan-700 text-gray-200 py-1 rounded-md"
          >
            {" "}
            Booked
          </button>
        </div>
      </form>
    </div>
  );
}

export default BookingForm;
