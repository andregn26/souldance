import React from "react"
import { ButtonOutlineLight } from "../UI/Button"

// import SoulDance from "../../assets/SoulDance.mp4"
import coverVID from "../../assets/videos/cover.mp4"

export default function Hero() {
  return (
    <div className="Hero">
      <video
        className="Hero--Video"
        id="Video"
        src={coverVID}
        autoPlay={true}
        muted
        loop
      />
      <div className="Hero--Overlay">
        <div className="Hero--Content">
          <ButtonOutlineLight className="OutlineLightBackground Hero--Content--Cta">
            Vem Experimentar!
          </ButtonOutlineLight>
        </div>
      </div>
    </div>
  )
}
