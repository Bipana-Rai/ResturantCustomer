import { useForm } from "react-hook-form";

interface TableCardProps {
  number: string;
  location?: string;
}
function BookingForm({ number, location }: TableCardProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {};
  return (
    <div className="h-[300px] w-[350px] bg-white">
      <p>Table-{number}</p>
      <p>{location}</p>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="">Number of people </label>
          <input type="text" {...register("members", { required: true })} />
          {errors.members && errors.members.type === "required" && (
            <span>Please enter number of people</span>
          )}
        </div>
        <div>
          <label htmlFor="">Reservation Date</label>
          <input type="date" {...register("bookingDate", { required: true })} />
          {errors.bookingDate && errors.bookingDate.type === "required" && (
            <span>Date is required</span>
          )}
        </div>
        <div>
          <label htmlFor="">Reservation time</label>
          <input type="time" {...register("bookingTime", { required: true })} />
          {errors.bookingTime && errors.bookingTime.type === "required" && (
            <span>time is required</span>
          )}
        </div>
        <div className="flex justify-between">
          <button className="px-5 text-sm bg-red-500 text-gray-200 py-1 rounded-md">
            {" "}
            Cancel
          </button>
          <button
            type="submit"
            className="px-5 text-sm bg-cyan-700 text-gray-200 py-1 rounded-md"
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
