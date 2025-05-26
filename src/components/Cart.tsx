import CartCard from "./CartCard";
import PopoverDemo from "@/components/Popover";

import { useEffect, useState } from "react";
import DineInForm from "./DineInForm";
import TakeAwayForm from "./TakeAwayForm";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { authorizeUser, getCartItem } from "@/features/itemSlice";

function Cart() {
  const [itemTotals, setItemTotals] = useState<Record<string, number>>({});
  const [showOrder, setShowOrder] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { cartData,user } = useSelector((state: RootState) => state.item);
  const [showTakeAwayOrder, setShowTakeAwayOrder] = useState(false);
  const handlePriceChange = (id: string, total: number) => {
    setItemTotals((prev) => ({ ...prev, [id]: total }));
  };
  const grandTotal = Object.values(itemTotals).reduce(
    (acc, curr) => acc + curr,
    0
  );
  useEffect(() => {
    dispatch(getCartItem({userId:user?._id}));
    dispatch(authorizeUser())
  }, [dispatch]);

  return (
    <>
      {showOrder && <DineInForm setShowOrder={setShowOrder} />}
      {showTakeAwayOrder && (
        <TakeAwayForm setShowTakeAwayOrder={setShowTakeAwayOrder} />
      )}
      <div className="flex flex-col h-screen lg:h-[89vh] pb-4">
        <div className="flex-1 overflow-y-auto md:bg-white bg-gray-200 scrollbar-hidden md:px-2 md:pt-0 pt-19 px-5">
          <p className="font-bold text-lg text-center mb-1">Cart Item</p>
          {cartData.length > 0 ? (
            cartData.map((item) => (
              <CartCard
                item={item}
                userId={user?._id}
                onPriceChange={handlePriceChange}
                key={item._id}
              />
            ))
          ) : (
            <p className="text-center text-gray-500">No items in cart</p>
          )}
        </div>
        {cartData.length > 0 && (
          <div className="flex flex-col gap-3 pe-3 bg-white">
            <p className="px-4 py-2 font-bold text-lg ">
              Grand Total: ${grandTotal.toFixed(2)}
            </p>
            <PopoverDemo
              setShowOrder={setShowOrder}
              setShowTakeAwayOrder={setShowTakeAwayOrder}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
