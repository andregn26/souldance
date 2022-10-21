import React from "react"
import Button from "../Button"
import { CgClose } from "react-icons/cg"

function ModalClasses({ setIsOpen, pop }) {
  return (
    <div className="Modal-Background" onClick={() => setIsOpen(false)}>
      <div className="Modal">
        <div className="Modal-Container">
          <div className="Modal-Container-Header">
            <h5 className="Modal-Container-Header-Heading">{pop.danceClass}</h5>
          </div>
          <Button
            ok
            className="Modal-Container-CloseBtn"
            onClick={() => setIsOpen(false)}
          >
            Fechar
          </Button>
          <div className="Modal-Container-Content"></div>
        </div>
      </div>
    </div>
  )
}

export default ModalClasses
