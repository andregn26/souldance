import React, { Fragment } from "react"
import { Routes, Route } from "react-router"
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet"

import Header from "./Components/Header"
import Homepage from "./Pages/Homepage"
import Footer from "./Components/Footer"
import WapButton from "./Components/UI/WapButton"
import "./sass/styles.css"
function App() {
  return (
    <Fragment>
      <Header />
      <Homepage />
      <Footer />
      <WapButton />
    </Fragment>
  )
}

export default App
