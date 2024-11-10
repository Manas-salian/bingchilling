// Cart.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

const Cart = ({ cart, onRemoveFromCart }) => {
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <section id="cart">
      <h2>Your Cart</h2>
      <div id="cartItems">
        {cart.length === 0 ? (
          <p>No items in the cart yet.</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="cart-item">
              <span>{item.name} - ${item.price}</span>
              <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
            </div>
          ))
        )}
      </div>
      <div id="cartTotal">
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
      </div>
      <Link to="/">
        <button>Back to Shopping</button>
      </Link>
    </section>
  );
};

export default Cart;