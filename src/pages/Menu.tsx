import Cart from "@/components/Cart";
import useIsSmallScreen from "@/customHook/useIsSmallScreen";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import Category from "../components/Category";
import { getCartItem, getCategory, getItems } from "../features/itemSlice";
import { AppDispatch, RootState } from "../store/store";
function Menu() {
  const dispatch = useDispatch<AppDispatch>();
  const [showFull, setShowFull] = useState<boolean>(false);

  const cartContainerRef = useRef<HTMLDivElement>(null);
  const [category, setCategory] = useState("all");

  const { itemDetail, categoryDetail, cartData } = useSelector(
    (state: RootState) => state.item
  );

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
      <title>Menu page</title>
      <link rel="icon" href="/food.png" />
      <div className="lg:grid lg:grid-cols-7 ">
        <div className="col-span-5  ">
          <div className="sticky top-13 py-5 md:ps-10 ps-3   bg-[#f3f3f3] flex flex-wrap md:gap-4  gap-4 ">
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
            {slicedCategory.map((e) => (
              <Category
                data={e}
                key={e._id}
                setCategory={setCategory}
                categoryCount={categoryCount?.[e.category] || 0}
              />
            ))}
            <button className="cursor-pointer" onClick={handleClick}>
              {showFull ? "see less..." : "see more..."}
            </button>
          </div>
          <div className=" md:pt-14 md:ps-10 px-2 pt-10">
            <p className="md:text-3xl font-semibold text-gray-600 py-3 ">
              Lunch Menu
            </p>
            <div className="flex flex-wrap justify-center gap-4  ">
              {finalFilterData?.map((e, i) => (
                <Card key={i} data={e} />
              ))}
            </div>
          </div>
        </div>
        {/* second */}
        {!isSmallScreen && (
          <div className="lg:col-span-2 sticky top-14 mt-1 h-[93vh]  bg-gray-200 pt-3  px-2 w-full  ">
           
            <Cart />
          </div>
        )}
      </div>
    </>
  );
}

export default Menu;
