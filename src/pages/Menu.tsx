import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import { AppDispatch, RootState } from "../store/store";
import { useEffect, useRef, useState } from "react";
import { getCategory, getItems } from "../features/itemSlice";
import Category from "../components/Category";

import CartCard from "../components/CartCard";

import axios from "axios";
export interface cartItems {
  _id: string;
  dishName: string;
  dishCategory: string;
  dishPrice: number;
  dishImage?: string;
  added: boolean;
  quantity:number
}
function Menu() {
  const dispatch = useDispatch<AppDispatch>();
  const [cartData, setCartData] = useState<cartItems[]>([]);
  const [showFull, setShowFull] = useState<boolean>(false);
  const [itemTotals, setItemTotals] = useState<Record<string, number>>({});
  const cartContainerRef = useRef<HTMLDivElement>(null);
  const { itemDetail, categoryDetail } = useSelector(
    (state: RootState) => state.item
  );
  const handleClick = () => {
    setShowFull(!showFull);
  };
  useEffect(() => {
    dispatch(getItems());
    dispatch(getCategory());
  }, [dispatch]);
  const handlePriceChange = (id: string, total: number) => {
    setItemTotals((prev) => ({ ...prev, [id]: total }));
  };
  const grandTotal = Object.values(itemTotals).reduce(
    (acc, curr) => acc + curr,
    0
  );
  useEffect(() => {
    if (cartContainerRef.current) {
      const lastItem = cartContainerRef.current.lastElementChild;
      if (lastItem) {
        lastItem.scrollIntoView({ behavior: "smooth", block: "end" });
      }
    }
  }, [cartData.length]);
  const handleAddToCart = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/getCart");
      // console.log(res.data)
      setCartData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleAddToCart();
  }, [cartData]);
  console.log("cartData", cartData);

  return (
    <>
      <div className="grid lg:grid-cols-7 ">
        <div className="col-span-5  ">
          <div className="sticky top-13 py-5 ps-10 z-20  bg-[#f3f3f3] flex flex-wrap gap-4 ">
            {(showFull ? categoryDetail : categoryDetail.slice(0, 7))?.map(
              (e) => (
                <Category data={e} />
              )
            )}
            <button className="cursor-pointer" onClick={handleClick}>
              {showFull ? "see less..." : "see more..."}
            </button>
          </div>
          <div className=" pt-14 ps-10">
            <p className="text-3xl font-semibold text-gray-600 py-3 ">
              Lunch Menu
            </p>
            <div className="flex flex-wrap gap-4  ">
              {itemDetail?.map((e, i) => (
                <Card key={i} data={e} cartData={cartData} />
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-2 sticky top-12 h-[93vh]  bg-gray-200 pt-3 px-2 ">
          <p className="font-bold text-lg text-center">Cart Item</p>
          <div
            ref={cartContainerRef}
            className=" h-[60vh] bg-white scrollbar-hidden px-2   overflow-y-auto  "
          >
            {cartData.length > 0 ? (
              cartData.map((item) => (
                <CartCard
                  item={item}
                  onPriceChange={handlePriceChange}
                  key={item._id}
                />
              ))
            ) : (
              <p className="text-center text-gray-500">No items in cart</p>
            )}
          </div>
          <div className="px-4 py-2 font-bold text-lg ">
            Grand Total: ${grandTotal.toFixed(2)}
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
