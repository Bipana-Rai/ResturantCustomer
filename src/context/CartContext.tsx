// CartContext.tsx
import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { dishItem } from "../features/itemSlice";

// 2. Define the context value type
export interface CartContextType {
  items: dishItem[];
  setItems: Dispatch<SetStateAction<dishItem[]>>;
}

// 3. Create the context (can be undefined initially)
export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

// 4. Define props for the provider
type CartProviderProps = {
  children: ReactNode;
};

// 5. Export a default provider component
export default function CartProvider({ children }: CartProviderProps) {
  const [items, setItems] = useState<dishItem[]>([]); // ✅ initialize with array
  return (
    <CartContext.Provider value={{ items, setItems }}>
      {children}
    </CartContext.Provider>
  );
}
