import React, { Fragment } from "react"
import Hero from "../Components/Hero"
import Classes from "../Components/Classes"
import AboutUs from "../Components/AboutUs"

const Homepage = () => {
  return (
    <Fragment>
      <div className="Layout-App">
        <Hero />
        <AboutUs />
      </div>
    </Fragment>
  )
}

export default Homepage
