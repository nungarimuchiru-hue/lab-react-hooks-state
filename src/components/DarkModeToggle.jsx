import React from 'react'

const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? 'Light' : 'Dark'}
    </button>
  )
}

export default DarkModeToggle
