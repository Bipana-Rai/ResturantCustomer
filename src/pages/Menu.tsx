import PopoverDemo from "@/components/Popover";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import CartCard from "../components/CartCard";
import Category from "../components/Category";
import { getCartItem, getCategory, getItems } from "../features/itemSlice";
import { AppDispatch, RootState } from "../store/store";
import DineInForm from "@/components/DineInForm";
import TakeAwayForm from "@/components/TakeAwayForm";
import useIsSmallScreen from "@/customHook/useIsSmallScreen";
function Menu() {
  const dispatch = useDispatch<AppDispatch>();
  const [showFull, setShowFull] = useState<boolean>(false);
  const [itemTotals, setItemTotals] = useState<Record<string, number>>({});
  const cartContainerRef = useRef<HTMLDivElement>(null);
  const [category, setCategory] = useState("all");

  const { itemDetail, categoryDetail, cartData } = useSelector(
    (state: RootState) => state.item
  );
  const [showOrder, setShowOrder] = useState(false);
  const [showTakeAwayOrder, setShowTakeAwayOrder] = useState(false);
  const isSmallScreen = useIsSmallScreen();
  const slicedCategory = showFull
    ? categoryDetail
    : categoryDetail.slice(0, isSmallScreen ? 3 : 6);
  const categoryCount = itemDetail?.reduce(
    (acc: Record<string, number>, item) => {
      acc[item.dishCategory] = (acc[item.dishCategory] || 0) + 1;
      return acc;
    },
    {}
  );
  const filterCartData = itemDetail?.filter(
    (item) => item.dishCategory === category
  );
  const finalFilterData = category === "all" ? itemDetail : filterCartData;
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

  useEffect(() => {
    dispatch(getCartItem());
  }, [dispatch]);
  return (
    <>
      {showOrder && <DineInForm setShowOrder={setShowOrder} />}
      {showTakeAwayOrder && (
        <TakeAwayForm setShowTakeAwayOrder={setShowTakeAwayOrder} />
      )}
      <title>Menu page</title>
      <link rel="icon" href="/food.png" />
      <div className="lg:grid lg:grid-cols-7 ">
        <div className="col-span-5  ">
          <div className="sticky top-13 py-5 md:ps-10 ps-3 z-20  bg-[#f3f3f3] flex flex-wrap md:gap-4  gap-4 ">
            <div
              className="h-14 cursor-pointer flex md:w-[180px] w-[150px] rounded-sm gap-1 items-center px-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)]  bg-white "
              onClick={() => setCategory("all")}
            >
              <div className="h-12 flex  rounded-md items-center md:w-12 w-9 ">
                <img src="./food.png" alt="" />
              </div>
              <div className="text-sm">
                <p className="font-semibold">all</p>
                <p className="text-[12px] text-gray-400">
                  {itemDetail.length} menu in stock
                </p>
              </div>
            </div>
            {slicedCategory.map(
              (e) => (
                <Category
                  data={e}
                  key={e._id}
                  setCategory={setCategory}
                  categoryCount={categoryCount?.[e.category] || 0}
                />
              )
            )}
            <button className="cursor-pointer" onClick={handleClick}>
              {showFull ? "see less..." : "see more..."}
            </button>
          </div>
          <div className=" md:pt-14 md:ps-10 px-2 pt-10">
            <p className="md:text-3xl font-semibold text-gray-600 py-3 ">
              Lunch Menu
            </p>
            <div className="flex flex-wrap gap-4  ">
              {finalFilterData?.map((e, i) => (
                <Card key={i} data={e} />
              ))}
            </div>
          </div>
        </div>
        {/* second */}
        
        <div className="lg:col-span-2 sticky top-14 mt-1 h-[93vh]  bg-gray-200 pt-3  px-2 w-full  ">
          <p className="font-bold text-lg text-center mb-1">Cart Item</p>
          <div
            // ref={cartContainerRef}
            className=" h-[65vh] bg-white scrollbar-hidden px-2   overflow-y-auto  "
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
          {cartData.length > 0 && (
            <div className="flex flex-col gap-3 pe-3">
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
      </div>
    </>
  );
}

export default Menu;
