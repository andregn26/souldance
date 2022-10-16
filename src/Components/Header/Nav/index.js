import React from "react"
import Button from "../../../UI/Button"

const Nav = ({ isMenu, menuToggle }) => {
  return (
    <nav className={isMenu ? "Menu--nav" : "Nav"}>
      <ul>
        <li onClick={menuToggle}>
          <a href="/">Locations</a>
        </li>
        <li onClick={menuToggle}>
          <a href="/">Pricing</a>
        </li>
        <li onClick={menuToggle}>
          <a href="/">Learn More</a>
        </li>
      </ul>
      <Button outline onClick={menuToggle}>
        Entra em Contacto
      </Button>
    </nav>
  )
}

export default Nav
