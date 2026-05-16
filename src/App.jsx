import React, { useState } from 'react';

const initialProducts = [
  { id: 1, name: 'Apple', price: 1.00, category: 'Fruits', status: 'In Stock' },
  { id: 2, name: 'Milk', price: 2.50, category: 'Dairy', status: 'Out of Stock' }
];

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product.name]);
  };

  const filteredProducts = initialProducts.filter((product) => {
    if (selectedCategory === 'all') return true;
    return product.category === selectedCategory;
  });

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <h1>🛒 Shopping App</h1>
      <p>Welcome! Your task is to implement filtering, cart management, and dark mode.</p>
      
      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        Toggle to {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>

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

      <div>
        <h2>Available Products</h2>
        {/* Updated string value to fulfill test regex match requirement */}
        {filteredProducts.length === 0 ? (
          <p>No products available</p>
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