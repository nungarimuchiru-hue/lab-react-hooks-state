import React from 'react'

const DarkModeToggle = (props) => {
  // TODO: Implement dark mode toggle logic
  function changeMode () {
    props.setIsDarkMode(!props.setIsDarkMode);
  }

  return (
    <button onClick={changeMode}>
      {props.isDarkMode
      ? "Switch to Light Mode"
      : "Switch to Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;
