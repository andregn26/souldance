import React, { Fragment } from "react"
// import { Routes, Route } from "react-router"
import Header from "./Components/Header"
import Homepage from "./Pages/Homepage"
import Footer from "./Components/Footer/Footer"
import ButtonWhatsapp from "./Components/UI/ButtonWhatsapp"

export default function App() {
  return (
    <Fragment>
      <Header />
      <Homepage />
      <Footer />
      <ButtonWhatsapp />
    </Fragment>
  )
}
