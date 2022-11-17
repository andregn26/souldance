import React from "react"
import { ButtonModal } from "../UI/Button"

function ModalClasses({ changeContent, pop }) {
  return (
    <div className="Modal--Background" onClick={changeContent}>
      <div className="Modal">
        <div className="Modal--Container" onClick={(e) => e.stopPropagation()}>
          <div className="Modal--Container--Header">
            <h2 className="Modal--Container--Header--Heading">
              {pop.danceClass}
            </h2>
          </div>
          <div className="Modal--Container--Body">
            <p className="Modal--Container--Body--Description">
              {pop.description}
            </p>

            <h4 className="Modal--Container--Body--Professors">
              Professores: {pop.professores}
            </h4>

            <p className="Modal--Container--Body--Schedule">
              {pop.schedule[0].day}: {pop.schedule[0].hour}h <br />
              {pop.schedule[1].day}: {pop.schedule[1].hour}h
            </p>
          </div>

          <ButtonModal className="Modal" onClick={changeContent}>
            Fechar
          </ButtonModal>
        </div>
      </div>
    </div>
  )
}

export default ModalClasses
