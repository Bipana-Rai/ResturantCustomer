import URL from "../utils/Url";
import { IoMdAddCircle } from "react-icons/io";
import { AiFillMinusCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import { TiDelete } from "react-icons/ti";
import axios from "axios";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { deleteItemFromcart, getCartItem } from "../features/itemSlice";

interface cartItems {
  _id: string;
  dishName: string;
  dishCategory: string;
  dishPrice: number;
  dishImage?: string;
  quantity:number
}
interface CartCardProps {
  item: cartItems;
  onPriceChange: (id: string, total: number) => void;
  userId?:string
}

function CartCard({ item, onPriceChange,userId }: CartCardProps) {
  const dispatch=useDispatch<AppDispatch>()
  const [count, setCount] = useState(item.quantity || 1);

  const handleIncreseCount = async () => {
    const newCount = count + 1;
    setCount(newCount);
    await updateCartQuantity(item._id, newCount);
  };
  const handleDecreaseCount = async () => {
    if (count > 1) {
      const newCount = count - 1;
      setCount(newCount);
      await updateCartQuantity(item._id, count - 1);
    }
  };
  const updateCartQuantity = async (id: string, quantity: number) => {
    try {
      const res = await axios.put(
        `http://localhost:5000/api/updateQuantity/${id}`,
        {
          quantity: quantity,
        }
       
      );
       
      if (res.status === 200) {
        console.log("Quantity updated in backend:", res.data.data);
      }
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };
  const deleteCartItem=async(id:string)=>{
   await dispatch(deleteItemFromcart(id))
    dispatch(getCartItem({userId:userId}));
   setCount(0)
  }
  useEffect(() => {
    const total = item.dishPrice * count;
    onPriceChange(item._id, total);
  }, [count,setCount]);

  return (
    <>
      <div className="relative my-2 h-18 w-full bg-white rounded-md overflow-hidden shadow-[0_3px_10px_rgb(0,0,0,0.4)] ">
        <div className="absolute top-0 right-1 text-amber-600 text-2xl cursor-pointer z-20" onClick={()=>deleteCartItem(item._id)}>
          <TiDelete />
        </div>
        <div className=" flex">
          <div className="h-18 w-20 bg-cyan-700 flex  items-center  overflow-hidden justify-center">
            <img
              src={`${URL}${item.dishImage}`}
              className="object-cover h-13"
              alt=""
            />
          </div>
          <div className="px-2 ">
            <p className="text-md font-semibold">{item.dishName}</p>
            <p className="text-sm text-gray-500 ">{item.dishCategory}</p>
            <p className="font-bold">${(item.dishPrice * count).toFixed(2)}</p>
          </div>
        </div>
        <div className="flex absolute bottom-1 right-0 items-center px-2 gap-1  pt-8">
          <button
            className=" text-3xl text-gray-400 cursor-pointer "
            onClick={handleDecreaseCount}
          >
            <AiFillMinusCircle />
          </button>
          <input
            type="text"
            value={count}
            onChange={async (e) => {
              const value = e.target.value;

              if (value === "") {
                setCount(1);
              } else if (/^\d+$/.test(value) && Number(value) >= 1) {
                const newCount = Number(value);
                setCount(newCount);
                await updateCartQuantity(item._id, newCount);
                
              }
            }}
            className="w-12 shadow-[0_3px_10px_rgb(0,0,0,0.2)]  text-center outline-0 "
          />
          <button
            className="text-3xl text-cyan-700 cursor-pointer"
            onClick={handleIncreseCount}
          >
            <IoMdAddCircle />
          </button>
        </div>
      </div>
      <div></div>
    </>
  );
}

export default CartCard;
