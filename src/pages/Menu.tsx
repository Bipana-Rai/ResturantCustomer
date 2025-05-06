import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import { AppDispatch, RootState } from "../store/store";
import { useEffect, useState } from "react";
import { getCategory, getItems } from "../features/itemSlice";
import Category from "../components/Category";
import { useCart } from "../customHook/useCart";

import CartCard from "../components/CartCard";
function Menu() {
  const dispatch = useDispatch<AppDispatch>();
  const [showFull, setShowFull] = useState<boolean>(false);
  const cart = useCart();
  console.log(cart.items);

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

  return (
    <>
      {/* <div className="absolute top-15 right-10">
      <button className="bg-cyan-600 px-4 py-1 text-gray-200">Add To Cart</button>

    </div> */}
      <div className="grid lg:grid-cols-7 ">
        <div className="col-span-5  ">
          <div className="sticky top-13 py-5 ps-10 z-20  bg-[#f3f3f3] flex flex-wrap gap-4   overflow-y-auto">
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
              {itemDetail?.map((e) => (
                <Card setItems={cart.setItems} items={cart.items} data={e} />
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-2 pt-20 pe-5">
          <div className="flex flex-col gap-2">
          {cart.items &&
            cart.items.map((item) => (
             <CartCard item={item}/>
            ))}
        </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
