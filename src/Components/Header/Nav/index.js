import React from "react"
import { Link } from "react-router-dom"
import Button from "../../../UI/Button"

const Nav = ({ isMenu, menuToggle }) => {
  return (
    <nav className={isMenu ? "Menu--nav" : "Nav"}>
      <ul>
        <li onClick={menuToggle}>
          <Link to={"sobre-nos"}>Sobre Nós</Link>
        </li>
        <li onClick={menuToggle}>
          <Link to={"pricing"}>Horários</Link>
        </li>
        <li onClick={menuToggle}>
          <Link to={"learn-more"}>Learn More</Link>
        </li>
      </ul>
      <Button outline onClick={menuToggle}>
        Entra em Contacto
      </Button>
    </nav>
  )
}

export default Nav
