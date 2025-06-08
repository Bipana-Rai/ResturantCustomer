import useIsSmallScreen from "@/customHook/useIsSmallScreen";
import { authorizeUser, getCartItem } from "@/features/itemSlice";
import { AppDispatch, RootState } from "@/store/store";
import { useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
interface MainLayoutProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isSidebarOpen: boolean) => void;
}
function Navbar({ isSidebarOpen, setIsSidebarOpen }: MainLayoutProps) {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const isSmallScreen = useIsSmallScreen();
  const location = useLocation();
  const { cartData ,user} = useSelector((state: RootState) => state.item);

  useEffect(() => {
    dispatch(getCartItem({userId:user?._id}));
    dispatch(authorizeUser());
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
      <div className="fixed  z-50  flex items-center justify-between lg:px-7 px-4   h-15 bg-white w-[100vw]">
        <div
          className=" text-xl px-3 cursor-pointer"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <GiHamburgerMenu />
        </div>
        <div className="flex items-center">
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
              <p>{user?.fullName}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
