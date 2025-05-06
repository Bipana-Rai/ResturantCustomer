import URL from "../utils/Url";
import { dishItem } from "../features/itemSlice";
import { IoMdAddCircle } from "react-icons/io";
import { AiFillMinusCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import { TiDelete } from "react-icons/ti";
interface CartCardProps {
  item: dishItem;
  onPriceChange:(id:string,total:number)=>void
}

function CartCard({ item,onPriceChange }: CartCardProps) {
  const [count, setCount] = useState(1);
 

  const handleIncreseCount = () => {
    setCount((prev) => prev + 1);
  };
  const handleDecreaseCount = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };
  useEffect(() => {
  const total = item.dishPrice * count; 
  onPriceChange(item._id,total)
  }, [count]);
 
  console.log("items", item);
  return (
    <>
      <div className="relative my-2 h-18 w-full bg-white rounded-md overflow-hidden shadow-[0_3px_10px_rgb(0,0,0,0.4)] ">
        <div className="absolute top-0 right-1 text-amber-600 text-2xl cursor-pointer">
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
            onChange={(e) => {
              const value = e.target.value;

              if (value === "") {
                setCount(1);
              } else if (/^\d+$/.test(value) && Number(value) >= 1) {
                setCount(Number(value));
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
      <div>
     
      </div>
    </>
  );
}

export default CartCard;
