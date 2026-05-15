import React from 'react'

const Cart = ({ cartItems }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {/* Map through items passed from App state and render exact text format */}
        {cartItems.map((item, index) => (
          <li key={index}>
            {item} is in your cart.
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Cart
