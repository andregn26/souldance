import React, { Fragment } from "react"
import { Routes, Route } from "react-router"
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet"

import "./styles/styles.scss"

import Header from "./Components/Header"
import Homepage from "./Pages/Homepage"
import Footer from "./Components/Footer"

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
      </Routes>

      <Footer />
    </Fragment>
  )
}

export default App
