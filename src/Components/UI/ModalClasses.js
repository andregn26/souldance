import React from "react"
import Button from "./Button"
import { CgClose } from "react-icons/cg"

function ModalClasses({ changeContent, pop }) {
  return (
    <div className="Modal-Background" onClick={changeContent}>
      <div className="Modal">
        <div className="Modal-Container" onClick={(e) => e.stopPropagation()}>
          <div className="Modal-Container-Header">
            <h5 className="Modal-Container-Header-Heading">{pop.danceClass}</h5>
            <h5 className="Modal-Container-Header-Heading">
              {pop.professores}
            </h5>
            <p className="Modal-Container-Header-Heading">{pop.description}</p>
            <p className="Modal-Container-Header-Heading">
              {pop.schedule[0].day}: {pop.schedule[0].hour}h <br />
              {pop.schedule[1].day}: {pop.schedule[1].hour}h
            </p>
          </div>
          <Button className="Modal-Container-CloseBtn" onClick={changeContent}>
            Fechar
          </Button>
          <div className="Modal-Container-Content"></div>
        </div>
      </div>
    </div>
  )
}

export default ModalClasses
