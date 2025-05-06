import { IoMdAddCircle } from "react-icons/io";
import { AiFillMinusCircle } from "react-icons/ai";
import { useState } from "react";
import { items } from "../features/itemSlice";

type CardProps={
  data:items;
  setItems:(item:items[])=>void
  items:items[];
}
function Card({ data ,setItems,items}:CardProps) {
  const [count, setCount] = useState(0);
  const handleClick=()=>{
    setItems([...items,data])
  }
  return (
    <>
      <div className="h-[120px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex flex-col border-2 justify-between w-[250px]  border-white bg-white py-1 rounded-xl px-2 hover:border-cyan-400 cursor-pointer ">
        <div className="flex">
          <div className=" bg-gray-200 h-17 w-16 items-center flex ">
            <img
              className="object-cover h-full   "
              src={`http://localhost:5000/uploads/${data.dishImage}`}
              alt=""
            />
          </div>
          <div className="px-3 py-2">
            <p className="font-bold">{data.dishName}</p>
            <div className="leading-4">
              {data.dishDiscription || "fren and juicy"}
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center px-3">
          <p className="font-bold  text-xl">${data.dishPrice}</p>
          <div className="flex    rounded-2xl items-center">
            <button className=" text-2xl text-gray-400 cursor-pointer ">
              <AiFillMinusCircle />
            </button>
            <input
              type="text"
              value={count}
              onChange={(e) => setCount(Number(e.target.value))}
              className="w-6 shadow-[0_3px_10px_rgb(0,0,0,0.2)]  text-center outline-0 "
            />
            <button className="text-2xl text-cyan-700 cursor-pointer">
              <IoMdAddCircle />
            </button>
          </div>
        </div>
        <div className="bg-amber-600" onClick={handleClick}>Add to cart</div>
      </div>
    </>
  );
}

export default Card;
