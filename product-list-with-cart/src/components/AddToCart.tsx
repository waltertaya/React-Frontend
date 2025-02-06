import { useState } from "react";

const AddToCart = () => {
  const [clicked, setClicked] = useState(false);
  const [count, setCount] = useState(1);

  return (
    <div className="add-to-cart">
      {!clicked ? (
        <div onClick={() => setClicked(true)}>
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
            onClick={() => setCount((prev) => Math.max(1, prev - 1))}
          />
          <p>{count}</p>
          <img
            src="/src/assets/images/icon-increment-quantity.svg"
            alt="Increment quantity"
            onClick={() => setCount((prev) => prev + 1)}
          />
        </div>
      )}
    </div>
  );
};

export default AddToCart;
