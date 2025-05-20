import {
  addedItemToCart,
  deleteItemFromcart,
  dishItem,
  getCartItem,
} from "../features/itemSlice";
import URL from "../utils/Url";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";

type CardProps = {
  data: dishItem;
};

function Card({ data }: CardProps) {
  const dispatch = useDispatch<AppDispatch>();
  const { cartData } = useSelector((state: RootState) => state.item);

  const isAdded = cartData?.some(
    (cartItem) => cartItem._id === data._id && cartItem.added
  );
  const handleClick =async () => {
    if (isAdded) {
     await dispatch(deleteItemFromcart(data._id));
    } else {
     await dispatch(addedItemToCart(data));
    }
     dispatch(getCartItem())
  };

  return (
    <>
      <div className="h-[120px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex flex-col border-2 justify-between w-[250px]  border-white bg-white py-1 rounded-xl px-2 hover:border-cyan-400 cursor-pointer ">
        <div className="flex">
          <div className=" bg-gray-200 h-17 w-16 items-center flex ">
            <img
              className="object-cover h-full   "
              src={`${URL}${data.dishImage}`}
              alt=""
            />
          </div>
          <div className="ps-3 py-2 leading-4  w-full">
            <p className="font-bold  ">{data.dishName}</p>
            <p className="text-sm text-gray-500 ">{data.dishCategory}</p>
            <div className="leading-4 text-sm font-semibold pt-1 ">
              {data.dishDiscription || "fresh and juicy"}
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center px-3">
          <p className="font-bold  text-xl">${data.dishPrice}</p>

          <div
            className={`${isAdded ? "bg-green-700" : "bg-cyan-600"} 
            px-3 w-[100px] text-center py-1 text-gray-100 rounded-lg text-sm`}
            onClick={handleClick}
          >
            <p>{`${isAdded ? "added" : "add to cart"}`}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
