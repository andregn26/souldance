import React from "react"
import { Link } from "react-scroll"
// import { Link } from "react-router-dom"
import { ButtonFillLight } from "../../UI/Button"

const Nav = ({ isMenu, menuToggle }) => {
  return (
    <nav className={isMenu ? "Menu--nav" : "Nav"}>
      <ul>
        <li>
          <Link
            to="Homepage--AboutUs_section"
            smooth={true}
            offset={0}
            duration={500}
            onClick={menuToggle}
          >
            Sobre Nós
          </Link>
        </li>
        <li onClick={menuToggle}>
          <Link
            to="Layout-Classes"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={menuToggle}
          >
            Modalidades
          </Link>
        </li>
        <li onClick={menuToggle}>
          <Link
            to="Footer"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={menuToggle}
          >
            Footer
          </Link>
        </li>
      </ul>
      <ButtonFillLight onClick={menuToggle}>Entra em Contacto</ButtonFillLight>
    </nav>
  )
}

export default Nav
