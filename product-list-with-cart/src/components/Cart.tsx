import { useCart } from "./CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const orderTotal = cart.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );

  return (
    <div className="cart">
      <h2>Your Cart ({cart.length})</h2>
      {cart.length === 0 ? (
        <article>
          <img
            className="empty-cart-img"
            src="/src/assets/images/illustration-empty-cart.svg"
            alt="Empty cart illustration"
          />
          <p>Your added items will appear here</p>
        </article>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.name} className="cart-item">
                <p>{item.name}</p>
                <div>
                  ${item.count}x @ ${item.price.toFixed(2)} = $
                  {(item.price * item.count).toFixed(2)}
                  <button onClick={() => removeFromCart(item.name)}>
                    <img
                      src="/src/assets/images/icon-remove-item.svg"
                      alt="Remove item"
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <p className="order-total">
            <span>Order Total</span>
            <span>${orderTotal.toFixed(2)}</span>
          </p>
          <div className="carbon-neutral">
            <img
              src="/src/assets/images/icon-carbon-neutral.svg"
              alt="Carbon neutral leaf icon"
            />
            <p>
              This is a <span>carbon-neutral</span> delivery
            </p>
          </div>
          <button>Confirm Order</button>
        </>
      )}
    </div>
  );
};

export default Cart;
