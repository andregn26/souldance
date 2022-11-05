import React from "react"
import { Link } from "react-scroll"
// import { Link } from "react-router-dom"
import Button from "../../UI/Button"

const Nav = ({ isMenu, menuToggle }) => {
  return (
    <nav className={isMenu ? "Menu--nav" : "Nav"}>
      <ul>
        <li>
          <Link
            to="AboutUs_Grid"
            spy={true}
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
      <Button outline onClick={menuToggle}>
        Entra em Contacto
      </Button>
    </nav>
  )
}

export default Nav
