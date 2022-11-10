import React from "react"

const AboutUs = () => {
  return (
    <div
      className="Homepage--AboutUs_section About_Us border-layout "
      id="AboutUs_Grid"
    >
      <div className="About_Us--Grid border-container">
        <h2 className="About_Us--Title border-child_container">
          MAIS QUE UMA ESCOLA DE DANÇA
        </h2>
        <div className="About_Us--Text border-child_container">
          <p>
            Em 2018, a SoulDance foi fundada com uma simples missão:{" "}
            <mark>
              Fazer da dança uma parte integrante da vida de todos nós.
            </mark>{" "}
            Com a entrega e dedicação dos mais conceituados professores do
            mercado, trabalhamos para construir um lugar onde os nossos alunos
            são estimulados a descobrir, sem receios, todo o seu potencial e a
            criar uma comunidade assente na diversidade e inclusão ligada pela
            dança.
          </p>
        </div>
        {/* <div className="blockquote-wrapper">
            <div className="blockquote">
              <h2>
                I feel that the essence of dance is the expression of man - the
                landscape of his soul
              </h2>
              <h4>&mdash;Steven Pressfield</h4>
            </div>
          </div> */}
      </div>
    </div>
  )
}

export default AboutUs
