import React, { useContext } from "react"
import { DarkModeContext } from "../../context/DarkModeContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun } from "@fortawesome/free-solid-svg-icons"
import { faMoon } from "@fortawesome/free-solid-svg-icons"

const ToggleTheme = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext)
  const theme = darkMode ? "light" : "dark"
  const circleClickHandler = (theme) => {
    setDarkMode(!darkMode)
    document.documentElement.className = theme
  }

  return (
    <div className="toggle-wrapper">
      <div className="toggle" onClick={() => circleClickHandler(theme)}>
        <div>
          <FontAwesomeIcon icon={faSun} className="sun" />
        </div>
        <div>
          <FontAwesomeIcon icon={faMoon} className="moon" />
        </div>
        <div className={darkMode ? "circle-dark" : "circle-light"}></div>
      </div>
    </div>
  )
}
export default ToggleTheme
