import { getCartItem } from "@/features/itemSlice";
import { AppDispatch, RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { orderTakeAwayData } from "@/features/itemSlice";

import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { MdError } from "react-icons/md";

interface menuProps {
  setShowTakeAwayOrder: (showTakeAway: boolean) => void;
}

function TakeAwayForm({ setShowTakeAwayOrder }: menuProps) {
  const dispatch = useDispatch<AppDispatch>();
  const [showOrder, setShowOrder] = useState(true);
  const [showForm, setShowForm] = useState(false);
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
  }, []);
  const grandTotal = cartData.reduce(
    (acc: number, item: cartItems) => acc + item.dishPrice * item.quantity,
    0
  );
  const handleOrder = () => {
    setShowForm(true);
    setShowOrder(false);
  };
  return (
    <>
      <div className="fixed flex items-center justify-center h-[100vh] w-[100vw] backdrop-blur-[2px] bg-[#00000070] z-30 top-0 left-0">
        <div className="anime px-10 rounded-md bg-white h-[400px] w-[500px]  ">
          {showOrder && (
            <>
              {" "}
              <p className="text-xl py-3 font-semibold px-5  ">Ordered Items</p>
              <div className=" flex flex-col gap-2 border-b-1 border-dashed border-gray-300 h-[200px] overflow-y-auto scrollbar-hidden pb-3">
                {cartData?.map((item) => (
                  <div className="flex justify-between px-5">
                    <p className="text-gray-600 ">
                      {item.quantity}x {item.dishName}
                    </p>
                    <p className="font-semibold">
                      $ {item.dishPrice * item.quantity}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex px-5  py-3 border-b-1 border-dashed   justify-between border-gray-300">
                <p className="font-semibold text-md">Total Payable</p>
                <p className="font-semibold">${grandTotal}</p>
              </div>
              <div className="flex py-5 justify-around">
                <button
                  className="px-5 text-sm py-2 cursor-pointer border-1 border-black rounded-md "
                  onClick={() => setShowTakeAwayOrder(false)}
                >
                  Cancel order
                </button>
                <button
                  className="px-5 text-sm py-2  bg-black rounded-md text-gray-100 cursor-pointer "
                  onClick={handleOrder}
                >
                  Place order
                </button>
              </div>
            </>
          )}

          {showForm && (
            <>
              <form
                action=""
                className="flex  flex-col gap-3  pb-7 py-3"
                onSubmit={handleSubmit(onSubmit)}
              >
                <p className="text-xl  font-semibold text-center">
                  Order Payment
                </p>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { width: "full" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  {" "}
                  <div className="mb-7">
                    <TextField
                      id="outlined-basic"
                      className="w-full "
                      label="Full Name"
                      variant="outlined"
                      size="small"
                      sx={{
                        "& .MuiInputBase-input": {
                          fontSize: "1rem",
                        },
                        "& .MuiInputLabel-root": {
                          fontSize: "0.9rem",
                        },
                      }}
                      {...register("name", {
                        required: "Please enter your name.",
                      })}
                    />
                  {errors.name && (
                    <span className="text-sm mt-2 flex items-center gap-1 text-red-600 font-semibold">
                      <MdError />
                      {errors.name.message}
                    </span>
                  )}
                  </div>
                  <TextField
                    id="outlined-basic"
                    label="Phone Number"
                    className="w-full  "
                    size="small"
                    variant="outlined"
                    type="tel"
                    sx={{
                      "& .MuiInputBase-input": {
                        fontSize: "1rem",
                      },
                      "& .MuiInputLabel-root": {
                        fontSize: "0.9rem",
                      },
                    }}
                    {...register("number", {
                      required: "Please enter phone number.",
                     validate:(value=>{
                      if(value.length<10){
                         return "Invalid number.";
                      }
                      if(value.length>10){
                         return "The number should be exactly 10 digits.";
                      }
                      if(!/^98|97/.test(value)){
                        return "Phone number must start with 98 or 97.";
                      }
                     })
                    })}
                  />
                  {!errors.name && errors.number && (
                    <span className="text-sm mt-2 flex items-center gap-1 text-red-600 font-semibold">
                      <MdError />
                      {errors.number.message}
                    </span>
                  )}
                </Box>

                {/* payment */}

                <div className="border-t-1 border-gray-400 mt-4 ">
                  <p className="text-center py-3">Payment Method</p>
                  <div className="flex justify-around">
                    <img src="./esewa.png" alt="" className=" w-25" />
                    <img src="./khalti.png" alt="" className=" w-25" />
                  </div>
                </div>

                <div className="flex  justify-around pt-3">
                  <button
                    className=" border-2 border-gray-500 px-4  py-1 text-sm cursor-pointer text-gray-600  rounded-md"
                    type="submit"
                    onClick={() => setShowTakeAwayOrder(false)}
                  >
                    Cancel Order
                  </button>
                  <button
                    className="bg-green-500 cursor-pointer text-gray-100 px-4 py-1 text-sm  rounded-md"
                    type="submit"
                  >
                    Confirm order
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default TakeAwayForm;
