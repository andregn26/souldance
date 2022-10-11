import React, { useState } from "react"
import Logo from "../../UI/Logo"
import Nav from "./Nav"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const handleMenuToggle = () => {
    setMenuOpen((p) => !p)
  }
  const menuToggle = !menuOpen ? (
    <cgMenuRight onClick={handleMenuToggle} />
  ) : (
    <cgClose onClick={handleMenuToggle} />
  )

  return (
    <div className="Header">
      <Nav>
        <Logo />
        <div className="Header--menu">
          <div className="Header--menu-toggle">{menuToggle}</div>
          <aside className="Menu">
            {menuOpen && "Show"} <Nav isMenu menuToggle={handleMenuToggle} />
          </aside>
        </div>
      </Nav>
    </div>
  )
}

export default Header
