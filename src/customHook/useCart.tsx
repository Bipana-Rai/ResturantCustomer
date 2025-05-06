import { useContext } from "react"
import { CartContext ,CartContextType} from "../context/CartContext"

export const useCart=():CartContextType=>{
    const cart=useContext(CartContext);
    if (!cart) throw new Error("useCart must be used within a CartProvider");
    return cart;
}