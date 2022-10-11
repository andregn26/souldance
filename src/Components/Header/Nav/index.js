import React from "react"

const Nav = ({ isMenu, menuToggle }) => {
  return (
    <nav className={isMenu ? "Menu--nav" : "Nav"}>
      <ul className="Nav--ul">
        <li className="Nav--li" onClick={menuToggle}>
          <a href="/">Locations</a>
        </li>
        <li onClick={menuToggle}>
          <a href="/">Pricing</a>
        </li>
        <li onClick={menuToggle}>
          <a href="/">Learn More</a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
