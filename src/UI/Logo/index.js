import React from "react"
import LeafSVG from "../../assets/LeafSVG"

const Logo = () => {
  const handleScrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" })
  return (
    <>
      <div onClick={handleScrollTop} className="Logo">
        <LeafSVG fillColor={"white"} />
      </div>
      <span className="Logo-span"></span>
    </>
  )
}

export default Logo
