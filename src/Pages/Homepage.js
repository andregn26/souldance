import React, { Fragment } from "react"
import Hero from "../Components/Body/Hero"
import Classes from "../Components/Body/Classes"
import AboutUs from "../Components/Body/AboutUs"

const Homepage = () => {
  return (
    <Fragment>
      <div className="Homepage">
        <Hero />
        <AboutUs />
        <Classes />
      </div>
    </Fragment>
  )
}

export default Homepage
