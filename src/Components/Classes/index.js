import React from "react"
import { useState } from "react"

import { CgClose } from "react-icons/cg"
import { modalities } from "../../Data"
import ModalClasses from "../../UI/ModalClasses"

const Classes = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [popupcontent, setpopupcontent] = useState([])
  const changeContent = (modality) => {
    setpopupcontent([modality])
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className="ClassesContainer">
        <div className="Classes">
          <div className="Classes-Content">
            <h2 className="Classes-Content-Title">As nossas modalidades</h2>
            <div className="Classes-Content-Gallery">
              {modalities.map((modality, hasLevels, hasLevelZero) => (
                <div
                  className="Gallery-Item"
                  key={modality.id}
                  onClick={() => {
                    changeContent(modality)
                    setIsOpen(true)
                  }}
                >
                  <img
                    className="Gallery-Item-Img"
                    src={modality.img}
                    alt={modality.danceClass}
                  />
                  <div className="Overlay"></div>
                  <div className="Gallery-Item-Content">
                    <h2 className="Gallery-Item-Content-Class">
                      {modality.danceClass}
                    </h2>
                  </div>
                  {hasLevels && hasLevelZero && (
                    <div className="Gallery-Item-Tag">Nível 0,1,2</div>
                  )}
                  {hasLevels && !hasLevelZero && (
                    <div className="Gallery-Item-Tag">Nível 1,2</div>
                  )}
                </div>
              ))}
              {isOpen && (
                <div>
                  {popupcontent.map((pop) => {
                    return <ModalClasses pop={pop} setIsOpen={setIsOpen} />
                  })}
                </div>
              )}
            </div>
            <div className="Classes-Content-ViewMore">
              <a href="/">Ver Mais</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Classes
