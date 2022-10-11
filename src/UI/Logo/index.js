import React from "react"
import LeafSVG from "../../assets/LeafSVG"

const Logo = () => {
  return (
    <>
      <a href="/" className="Logo">
        <LeafSVG fillColor={"white"} />
      </a>
      <span className="Logo-span"></span>
    </>
  )
}

export default Logo
