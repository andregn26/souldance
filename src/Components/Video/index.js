import React from "react"
import Button from "../../UI/Button"

import SoulDance from "../../assets/SoulDance.mp4"
import coverVID from "../../assets/cover.mp4"

const Video = () => {
  return (
    <div className="Container">
      <video
        autoPlay={true}
        muted
        loop
        src={SoulDance}
        id="Video"
        className="Video"
      ></video>
      <div className="SectionOne">
        <div className="SectionOne-Content">
          <h1 className="SectionOne-Content-Title">Estamos à Tua Espera</h1>
          <span className="SectionOne-Content-Tagline">
            Não percas tempo e junta-te a nós
          </span>
          <p className="SectionOne-Content-Description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            necessitatibus accusamus commodi id maxime voluptatum nemo?
          </p>
          <div className="SectionOne-Content-Cta">
            <Button className="Alert">Vem Experimentar!</Button>
            <Button>Conhece as Modalidades</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Video
