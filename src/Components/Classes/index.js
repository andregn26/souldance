import React from "react"

// import BsZoomOut from "react-icons/bs"

import template from "../../assets/template.jpg"
import ballet from "../../assets/ballet.jpg"
import funk from "../../assets/funk.jpg"
import hipHop from "../../assets/hip-hop.jpg"
import latinas from "../../assets/latinas.jpg"
// import maldives from "../../assets/maldives.jpg"

const classesData = [
  {
    id: 1,
    hasLevels: false,
    hasLevelZero: false,
    danceClass: "Latinas",
    img: latinas,
  },
  {
    id: 2,
    hasLevels: false,
    hasLevelZero: false,
    danceClass: "Latinas Kids",
    img: template,
  },
  {
    id: 3,
    hasLevels: true,
    hasLevelZero: true,
    danceClass: "Salsa",
    img: template,
  },
  {
    id: 4,
    hasLevels: true,
    hasLevelZero: true,
    danceClass: "Bachata",
    img: template,
  },
  {
    id: 5,
    hasLevels: true,
    hasLevelZero: false,
    danceClass: "Kizomba",
    img: template,
  },
  {
    id: 6,
    hasLevels: true,
    hasLevelZero: false,
    danceClass: "Pop Dance",
    img: template,
  },
  {
    id: 7,
    hasLevels: true,
    hasLevelZero: false,
    danceClass: "Hip-Hop",
    img: hipHop,
  },
  {
    id: 8,
    hasLevels: true,
    hasLevelZero: false,
    danceClass: "Ballet",
    img: ballet,
  },
  {
    id: 9,
    hasLevels: false,
    hasLevelZero: false,
    danceClass: "High Heels",
    img: template,
  },
  {
    id: 10,
    hasLevels: false,
    hasLevelZero: false,
    danceClass: "Funk Brasileiro",
    img: funk,
  },
  {
    id: 11,
    hasLevels: false,
    hasLevelZero: false,
    danceClass: "Jazz",
    img: template,
  },
  {
    id: 12,
    hasLevels: false,
    hasLevelZero: false,
    danceClass: "Semba",
    img: template,
  },
  {
    id: 13,
    hasLevels: false,
    hasLevelZero: false,
    danceClass: "Baby Steps",
    img: template,
  },
]

const Classes = () => {
  return (
    <div className="ClassesContainer">
      <div className="Classes">
        <div className="Classes-Content">
          <h2 className="Classes-Content-Title">As nossas modalidades</h2>
          <div className="Classes-Content-Gallery">
            {classesData.map(
              ({ id, hasLevels, hasLevelZero, danceClass, img }) => (
                <div className="Gallery-Item" key={id}>
                  <img
                    className="Gallery-Item-Img"
                    src={img}
                    alt={danceClass}
                  />
                  <div className="Overlay"></div>
                  <div className="Gallery-Item-Content">
                    <h2 className="Gallery-Item-Content-Class">{danceClass}</h2>
                  </div>
                  {hasLevels && hasLevelZero && (
                    <div className="Gallery-Item-Tag">Nível 0,1,2</div>
                  )}
                  {hasLevels && !hasLevelZero && (
                    <div className="Gallery-Item-Tag">Nível 1,2</div>
                  )}
                </div>
              )
            )}
          </div>
          <div className="Classes-Content-ViewMore">
            <a href="/">
              Ver Mais
              {/* <BsZoomOut /> */}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Classes
