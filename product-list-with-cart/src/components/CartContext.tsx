import { createContext, useContext, useState, ReactNode } from "react";

interface CartItem {
  name: string;
  price: number;
  count: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  updateCartItem: (name: string, count: number) => void;
  removeFromCart: (name: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((i) => i.name === item.name);
      if (existingItem) {
        return prevCart.map((i) =>
          i.name === item.name ? { ...i, count: i.count + item.count } : i
        );
      } else {
        return [...prevCart, item];
      }
    });
  };

  const updateCartItem = (name: string, count: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.name === name ? { ...item, count: count } : item
      )
    );
  };

  const removeFromCart = (name: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== name));
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateCartItem, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
