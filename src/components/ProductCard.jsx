import React from 'react'
import styles from '../styles/ProductCard.module.css'

const ProductCard = ({ product, addToCart }) => {
  return (
    <div
      className={`${styles.card} ${!product.inStock ? styles.outOfStock : ''}`}
    >
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      <p>Status: {product.inStock ? 'In Stock' : 'Out of Stock'}</p>

      {/* Trigger addToCart function passing the product name on click */}
      <button 
        data-testid={'product-' + product.id} 
        onClick={() => addToCart(product.name)}
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard

