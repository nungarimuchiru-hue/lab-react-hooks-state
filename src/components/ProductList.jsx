import React from 'react'
import ProductCard from './ProductCard'

// Sample product data
export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false }
]

const ProductList = ({ selectedCategory, addToCart }) => {
  // Filter products matching selectedCategory unless the category is 'all'
  const filteredProducts = sampleProducts.filter((product) => {
    return selectedCategory === 'all' || product.category === selectedCategory
  })

  return (
    <div>
      <h2>Available Products</h2>

      {/* Render only the filtered subset of items */}
      {filteredProducts.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          addToCart={addToCart} 
        />
      ))}
    </div>
  )
}

export default ProductList

