import { addDineInOrder, deleteAfterOrder, getCartItem, getTable } from "@/features/itemSlice";
import { AppDispatch, RootState } from "@/store/store";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { orderData } from "@/features/itemSlice";
import { cartItems } from "@/features/itemSlice";
import { toast } from "react-hot-toast";
interface menuProps {
  setShowOrder: (showOrder: boolean) => void;
}
function DineInForm({ setShowOrder }: menuProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<orderData>();
  const dispatch = useDispatch<AppDispatch>();
  const { cartData, tableDetail } = useSelector(
    (state: RootState) => state.item
  );
  const filterTableData = tableDetail.filter(
    (data) => data.tableStatus === "available"
  );

  useEffect(() => {
    dispatch(getCartItem());
    dispatch(getTable());
  }, [dispatch]);
  const grandTotal = cartData.reduce(
    (acc: number, item: cartItems) => acc + item.dishPrice * item.quantity,
    0
  );
  const onSubmit = (data: orderData) => {
    const orderData = {
      tableNumber: data.tableNumber,
      cartItems: cartData,
      totalAmount: grandTotal,
      status:"dine In",
      foodStatus:"waiting"
    };
    dispatch(addDineInOrder({ data: orderData }));
    setShowOrder(false);
     toast.success("Order items sucessfully")
     dispatch(deleteAfterOrder())
   
  };
   
  return (
    <>
      <div className="fixed flex items-center justify-center h-[100vh] w-[100vw] backdrop-blur-[2px] bg-[#00000070] z-30 top-0 left-0">
        <div className="anime px-9 rounded-md bg-white w-[450px]  ">
          <p className="text-xl py-3 font-semibold px-5  ">Ordered Items</p>
          <div className=" flex flex-col gap-2 border-b-1 border-dashed border-gray-300 pb-3">
            
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
          <form
            action=""
            className="flex  flex-col   gap-4 pt-5 pb-7 py-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="py-2">
              <select
                id=""
                defaultValue=""
                className="border-1 w-50 py-1 ms-7 px-3"
                {...register("tableNumber", { required: true })}
              >
                <option value="" disabled>
                  --Choose table--
                </option>
                {filterTableData.map((table) => (
                  <option key={table._id} value={table.tableNum}>
                    Table {table.tableNum}
                  </option>
                ))}
              </select>
              {errors.tableNumber && <span>Please select table</span>}
            </div>
            <div className="flex  justify-around">
              <button
                className=" border-2 border-black px-4  py-1 text-sm  rounded-md"
                type="submit"
                onClick={() => setShowOrder(false)}
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

export default DineInForm;
