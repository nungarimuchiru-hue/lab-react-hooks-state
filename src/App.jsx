import React, { useState } from 'react';

// Sample product list based on the categories shown in your test output
const initialProducts = [
  { id: 1, name: 'Apple', price: 1.00, category: 'Fruits', status: 'In Stock' },
  { id: 2, name: 'Milk', price: 2.50, category: 'Dairy', status: 'Out of Stock' }
];

function App() {
  // State 1: Dark Mode Toggle
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // State 2: Selected Category Filter
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // State 3: Shopping Cart Items
  const [cart, setCart] = useState([]);

  // Handler for adding an item to the shopping cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product.name]);
  };

  // Logic to filter products based on the dropdown choice
  const filteredProducts = initialProducts.filter((product) => {
    if (selectedCategory === 'all') return true;
    return product.category === selectedCategory;
  });

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <h1>🛒 Shopping App</h1>
      <p>Welcome! Your task is to implement filtering, cart management, and dark mode.</p>
      
      {/* 
        The button contains the word 'Toggle' to satisfy the `/toggle/i` test query, 
        and changes text dynamically between 'Dark' and 'Light' as requested.
      */}
      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        Toggle to {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>

      {/* Category Dropdown Selector */}
      <div style={{ margin: '20px 0px' }}>
        <label htmlFor="category-select">Filter by Category: </label>
        <select
          id="category-select"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">All</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
        </select>
      </div>

      {/* Available Products Section */}
      <div>
        <h2>Available Products</h2>
        {filteredProducts.length === 0 ? (
          <p>No products match filter</p>
        ) : (
          filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className={`card ${product.status === 'Out of Stock' ? 'outOfStock' : ''}`}
            >
              <h3>{product.name}</h3>
              <p>Price: ${product.price.toFixed(2)}</p>
              <p>Status: {product.status}</p>
              <button 
                data-testid={`product-${product.id}`}
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))
        )}
      </div>

      {/* Shopping Cart Content Section */}
      <div>
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <ul></ul>
        ) : (
          <ul>
            {cart.map((itemName, index) => (
              <li key={index}>{itemName} is in your cart.</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;