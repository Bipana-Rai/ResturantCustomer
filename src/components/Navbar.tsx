import useIsSmallScreen from "@/customHook/useIsSmallScreen";
import { getCartItem } from "@/features/itemSlice";
import { AppDispatch, RootState } from "@/store/store";
import { useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
function Navbar() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const isSmallScreen = useIsSmallScreen();
  const location = useLocation();
  const { cartData } = useSelector((state: RootState) => state.item);
  useEffect(() => {
    dispatch(getCartItem());
  }, [dispatch]);
  const handleCart = () => {
    navigate("/cart");
  };
  useEffect(() => {
    if (!isSmallScreen && location.pathname === "/cart") {
      navigate("/menu");
    }
  }, [isSmallScreen, location.pathname, navigate]);



  return (
    <>
      <div className="fixed z-50  flex items-center justify-end px-3   h-15 bg-white w-[100vw]">
        <div
          className="h-10 w-10 relative bg-gray-200 flex items-center justify-center rounded-full"
          onClick={handleCart}
        >
          <div className="absolute top-[-2px] right-[-2px] h-4 w-4 text-[12px] rounded-full bg-red-500 text-gray-50 flex items-center justify-center">
            {cartData.length}
          </div>
          <FaShoppingCart className="text-xl cursor-pointer" />
        </div>
        <div className="flex">
          <div className="h-7 w-7 rounded-full">
            <img src="" alt="" />
          </div>
          <div>
            <p>Courtney henry</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
