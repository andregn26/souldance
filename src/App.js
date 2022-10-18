import React, { Fragment } from "react"
import "./styles/styles.scss"

import Header from "./Components/Header"
import Homepage from "./Pages/Homepage"
import Footer from "./Components/Footer"

function App() {
  return (
    <Fragment>
      <Header />
      <Homepage />
      <Footer />
    </Fragment>
  )
}

export default App
