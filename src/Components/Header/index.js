import React, { useState } from "react"
import Logo from "../../UI/Logo"
import Nav from "./Nav"
import { CgMenuRightAlt, CgClose } from "react-icons/cg"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const handleMenuToggle = () => {
    setMenuOpen((p) => !p)
  }
  const menuToggle = !menuOpen ? (
    <CgMenuRightAlt onClick={handleMenuToggle} />
  ) : (
    <CgClose onClick={handleMenuToggle} />
  )

  return (
    <div className="Header">
      <Logo />
      <Nav />
      <div className="Header--menu">
        <div className="Header--menu-toggle">{menuToggle}</div>
        <aside className="Menu">
          {menuOpen && "Show"} <Nav isMenu menuToggle={handleMenuToggle} />
        </aside>
      </div>
    </div>
  )
}

export default Header
