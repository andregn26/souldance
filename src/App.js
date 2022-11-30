import React, { Fragment } from "react"
// import { Routes, Route } from "react-router"
import Header from "./Components/Header"
import Homepage from "./Pages/Homepage"
import Footer from "./Components/Footer/Footer"
import ButtonWhatsapp from "./Components/UI/ButtonWhatsapp"
import { DarkModeProvider, DarkModeContext } from "./context/DarkModeContext"
import { useContext } from "react"

export default function App() {
  const { darkMode } = useContext(DarkModeContext)
  return (
    <Fragment>
      <DarkModeProvider>
        <div data-theme={darkMode ? "dark" : "light"} className="Theme">
          <Header />
          <Homepage />
          <Footer />
          <ButtonWhatsapp />
        </div>
      </DarkModeProvider>
    </Fragment>
  )
}
