import { useState } from "react";
import { useCart } from "./CartContext";

interface AddToCartProps {
  name: string;
  price: number;
}

const AddToCart = ({ name, price }: AddToCartProps) => {
  const { addToCart, updateCartItem } = useCart();
  const [clicked, setClicked] = useState(false);
  const [count, setCount] = useState(1);

  const handleAddToCart = () => {
    setClicked(true);
    addToCart({ name, price, count });
  };

  return (
    <div className="add-to-cart">
      {!clicked ? (
        <div onClick={handleAddToCart}>
          <img
            src="/src/assets/images/icon-add-to-cart.svg"
            alt="Add to cart"
          />
          <p>Add to cart</p>
        </div>
      ) : (
        <div id="added">
          <img
            src="/src/assets/images/icon-decrement-quantity.svg"
            alt="Decrement quantity"
            onClick={() => {
              const newCount = Math.max(1, count - 1);
              setCount(newCount);
              updateCartItem(name, newCount);
            }}
          />
          <p>{count}</p>
          <img
            src="/src/assets/images/icon-increment-quantity.svg"
            alt="Increment quantity"
            onClick={() => {
              const newCount = count + 1;
              setCount(newCount);
              updateCartItem(name, newCount);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default AddToCart;
