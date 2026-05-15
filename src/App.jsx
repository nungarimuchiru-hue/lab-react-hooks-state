import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  // 1. State for dark mode toggle (boolean)
  const [isDarkMode, setIsDarkMode] = useState(false)

  // 2. State for cart management (array of items/strings)
  const [cart, setCart] = useState([])

  // 3. State for category filtering (string)
  const [category, setCategory] = useState('all')

  // Handler to add a product name to the cart array
  const addToCart = (productName) => {
    setCart((prevCart) => [...prevCart, productName])
  }

  // Toggle dark mode function
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode)
  }

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* Render DarkModeToggle and pass state/updater */}
      <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      {/* Implement category filter dropdown handling */}
      <div style={{ margin: '20px 0' }}>
        <label htmlFor="category-select">Filter by Category: </label>
        <select 
          id="category-select"
          value={category} 
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
        </select>
      </div>

      {/* Pass filter criteria and cart handler down to ProductList */}
      <ProductList selectedCategory={category} addToCart={addToCart} />

      {/* Render Cart component and pass the items array */}
      <Cart cartItems={cart} />
    </div>
  )
}

export default App
