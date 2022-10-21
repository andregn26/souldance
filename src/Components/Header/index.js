import React, { useEffect, useState } from "react"
import Logo from "../../UI/Logo"
import Nav from "./Nav"
import { CgMenuRightAlt, CgClose } from "react-icons/cg"
import useWindowSize from "../../hooks/useWindowSize"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const size = useWindowSize()

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false)
    }
  }, [size, menuOpen])

  const handleMenuToggle = () => {
    setMenuOpen((p) => !p)
  }
  const menuToggle = !menuOpen ? (
    <CgMenuRightAlt onClick={handleMenuToggle} />
  ) : (
    <CgClose onClick={handleMenuToggle} />
  )

  return (
    <header className="Header">
      <Logo />
      <Nav />
      <div className="Header--menu">
        <div className="Header--menu-toggle">{menuToggle}</div>
        <aside className={`${"Menu"} ${menuOpen && "Show"}`}>
          <Nav isMenu menuToggle={handleMenuToggle} />
        </aside>
      </div>
    </header>
  )
}

export default Header
