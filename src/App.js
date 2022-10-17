import React, { Fragment } from "react"
import "./styles/styles.scss"

import Header from "./Components/Header"

import Homepage from "./Pages/Homepage"

function App() {
  return (
    <Fragment>
      <Header />
      <Homepage />
    </Fragment>
  )
}

export default App
