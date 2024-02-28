// ThemeToggleButton.js
import React, { useState, useEffect } from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const ThemeToggleButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle theme
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Effect to set initial theme based on localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }
  }, []);

  // Effect to update localStorage when theme changes
  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    // Apply dark mode class to the body
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="flex justify-center ">
      <button
        className={`px-4 py-2 rounded focus:outline-none ${
          isDarkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"
        }`}
        onClick={toggleTheme}
      >
        <FontAwesomeIcon icon={isDarkMode ? faMoon : faSun} />
      </button>
      {/* <DarkModeToggle isDark={isDarkMode} setIsDark={setIsDarkMode} /> */}
    </div>
  );
};

export default ThemeToggleButton;
