import { getCartItem } from "@/features/itemSlice";
import { AppDispatch, RootState } from "@/store/store";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { orderTakeAwayData } from "@/features/itemSlice";
interface menuProps {
  setShowTakeAwayOrder: (showTakeAway: boolean) => void;
}

function TakeAwayForm({ setShowTakeAwayOrder }: menuProps) {
  const dispatch = useDispatch<AppDispatch>();
  const { cartData } = useSelector((state: RootState) => state.item);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<orderTakeAwayData>();
  const onSubmit = (data: orderTakeAwayData) => {
    const orderItem = {
      cartItem: cartData,
      name: data.name,
      number: data.number,
    };
  };
  useEffect(() => {
    dispatch(getCartItem());
  }, [dispatch]);
  return (
    <>
      <div className="fixed flex items-center justify-center h-[100vh] w-[100vw] backdrop-blur-[2px] bg-[#00000070] z-30 top-0 left-0">
        <div className="anime px-5 rounded-md bg-white w-[400px]  ">
          <form
            action=""
            className="flex  flex-col gap-3  pb-7 py-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-1 ">
              <label htmlFor="">Full Name</label>
              <input
                type="text"
                className=" border-1 px-2 rounded-md py-1 text-sm border-gray-400"
                placeholder="Enter a name.."
                {...register("name", { required: "name is required" })}
              />
              {errors.name && <span>Name is required</span>}
            </div>
            <div className="flex flex-col gap-1 ">
              <label htmlFor="">Phone Number</label>
              <input
                type="tel"
                className=" border-1 px-2 rounded-md py-1 text-sm border-gray-400"
                placeholder="Enter a phone number.."
                {...register("number", { required: "number is required" })}
              />
              {errors.number && <span>number is required</span>}
            </div>

            <div className="flex  justify-around pt-3">
              <button
                className=" border-2 border-black px-4  py-1 text-sm  rounded-md"
                type="submit"
                onClick={() => setShowTakeAwayOrder(false)}
              >
                Cancel Order
              </button>
              <button
                className="bg-black text-gray-100 px-4 py-1 text-sm  rounded-md"
                type="submit"
              >
                Confirm Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default TakeAwayForm;
