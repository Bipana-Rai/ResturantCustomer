import URL from "../utils/Url";
import { items } from "../features/itemSlice";


function CartCard({item}:items) {
    console.log("items",item)
  return (
    <div className="h-17 w-full flex items-center bg-white rounded-md overflow-hidden shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
    <div className="h-17 w-20 bg-gray-200 flex  items-center  overflow-hidden justify-center">
      <img src={`${URL}${item.dishImage}`} 
      className="object-cover h-13"
      alt="" />
    </div>
    <div className="px-2">
      <p>{item.dishName}</p>
      <p>${item.dishPrice}</p>
      </div>

  </div>
  )
}

export default CartCard