import React from "react"

import BsArrowDownLeft from "react-icons/bs"

import albania from "../../assets/albania.jpg"
import borabora from "../../assets/borabora.jpg"
import cabosanlucas from "../../assets/cabosanlucas.jpg"
import croatia from "../../assets/croatia.jpg"
import greece from "../../assets/greece.jpg"
import maldives from "../../assets/maldives.jpg"

const classesData = [
  { id: 1, danceClass: "Samba", img: albania },
  { id: 2, danceClass: "Samba", img: borabora },
  { id: 3, danceClass: "Samba", img: cabosanlucas },
  { id: 4, danceClass: "Samba", img: croatia },
  { id: 5, danceClass: "Samba", img: greece },
  { id: 6, danceClass: "Samba", img: maldives },
]

const Classes = () => {
  return (
    <div className="ClassesContainer">
      <div className="Classes">
        <div className="Classes-Content">
          <h2 className="Classes-Content-Title">As nossas modalidades</h2>
          <div className="Classes-Content-Gallery">
            {classesData.map(({ id, danceClass, img }) => (
              <div className="Gallery-Item" key={id}>
                <img className="Gallery-Item-Img" src={img} alt={danceClass} />
                <div className="Overlay"></div>
                <div className="Gallery-Item-Content">
                  <h2 className="Gallery-Item-Content-Class">{danceClass}</h2>
                </div>
              </div>
            ))}
          </div>
          <div className="Classes-Content-ViewMore">
            <a href="/">viewmore</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Classes
