import { IoMdAddCircle } from "react-icons/io";
import { AiFillMinusCircle } from "react-icons/ai";
interface Menu {
  dishName: string;
  dishPrice: number;
  dishCategory: string;
  dishImage?: string;
  dishDiscription:string
}
function Card({ data }: { data: Menu }) {
  return (
    <>
      <div className="h-[120px] flex flex-col border-2 justify-between w-[250px]  border-white bg-white py-1 rounded-xl px-2 hover:border-cyan-400 cursor-pointer ">
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
          <div className="leading-4">{data.dishDiscription || "fren and juicy"}</div>
        </div>
        </div>
        <div className="flex justify-between items-center px-3">
          <p className="font-bold  text-xl">${data.dishPrice}</p>
          <div className="flex gap-2 items-center">
            <button className=" text-xl text-gray-500 ">
            <AiFillMinusCircle />
            </button>
            <p>0</p>
            <button className="text-xl text-cyan-700">
            <IoMdAddCircle />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
