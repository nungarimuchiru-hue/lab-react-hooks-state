import React from 'react'

const Cart = () => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {useThemeProps.cartItems.map((item, index) => {
          return (
            <li key={index}>
              {item} is in your Cart
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cart;