import React from "react"
import Button from "./UI/Button"

// import SoulDance from "../../assets/SoulDance.mp4"
import coverVID from "../assets/cover.mp4"

const Hero = () => {
  return (
    <div className=".Hero_section Hero">
      <video
        className="Hero--Video"
        autoPlay={true}
        muted
        loop
        src={coverVID}
        id="Video"
      ></video>
      <div className="Hero--Overlay">
        <div className="Hero--Overlay--Content-Box">
          <h1 className="Hero--Overlay--Content-Box--Title">
            Estamos à Tua Espera
          </h1>
          <span className="Hero--Overlay--Content-Box--Tagline">
            Não percas tempo e junta-te a nós
          </span>
          <p className="Hero--Overlay--Content-Box--Description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            necessitatibus accusamus commodi id maxime voluptatum nemo?
          </p>
          <div className="Hero--Overlay--Content-Box--Cta">
            <Button>Vem Experimentar!</Button>
            <Button className="-outline">Conhece as Modalidades</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
