import { useForm } from "react-hook-form";

interface TableCardProps {
  number: string;
  location?: string;
  setShowBookingForm:(showBookingForm:boolean)=>void
}
function BookingForm({ number, location ,setShowBookingForm}: TableCardProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {};
  return (
    <div className="anime py-3 w-[500px] rounded-xl bg-white px-5 shadow-[0_3px_10px_rgb(0,0,0,0.1)]">
      <p className="text-2xl text-cyan-700 font-bold text-center">Booking</p>

      <p className=" text-cyan-800 font-bold">
        Table-{number}
        <span className=" text-gray-700 font-semibold font-serif">
          {" "}
          ({location})
        </span>
      </p>

      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-1 pb-1">
          <label htmlFor="">Full Name </label>
          <input
            type="text"
            className="border-1 border-gray-500 rounded-md px-2 text-sm py-1"
            {...register("fullName", { required: true })}
            placeholder="Enter Full Name"
          />
          {errors.fullName && errors.fullName.type === "required" && (
            <span className="text-red-500">Please enter number of people</span>
          )}
        </div>
        <div className="flex flex-col gap-1 pb-1">
          <label htmlFor="">Phone No </label>
          <input
            type="text"
            className="border-1 border-gray-500 rounded-md px-2 text-sm py-1"
            placeholder="Enter phone no"
            {...register("phNo", { required: true })}
          />
          {errors.phNo && errors.phNo.type === "required" && (
            <span className="text-red-500">Please enter number of people</span>
          )}
        </div>
        <div className="flex flex-col gap-1 pb-1">
          <label htmlFor="">Email </label>
          <input
            type="text"
            className="border-1 border-gray-500 rounded-md px-2 text-sm py-1"
            placeholder="Enter email"
            {...register("email", { required: true })}
          />
          {errors.email && errors.email.type === "required" && (
            <span className="text-red-500">Please enter number of people</span>
          )}
        </div>
        <div className="flex flex-col gap-1 pb-1">
          <label htmlFor="">Number of people </label>
          <input
            type="text"
            className="border-1 border-gray-500 rounded-md px-2 text-sm py-1"
            placeholder="Enter Number of people"
            {...register("members", { required: true })}
          />
          {errors.members && errors.members.type === "required" && (
            <span className="text-red-500">Please enter number of people</span>
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
            <span>Date is required</span>
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
            <span>time is required</span>
          )}
        </div>
        <div className="flex justify-between py-2 px-10">
          <button className="px-8 text-sm bg-red-500 text-gray-200 py-1 rounded-md cursor-pointer" onClick={()=>setShowBookingForm(false)}>
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
