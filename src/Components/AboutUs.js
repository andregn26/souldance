import React from "react"

const AboutUs = () => {
  return (
    <div className="AboutUs_section About_Us" id="AboutUs_Grid">
      <div className="vertical-center margin-horizontal">
        <div className="About_Us--Grid">
          <div className="About_Us--Title">
            <h2 className="text-lightShades-1000 fs-700">
              MAIS QUE UMA ESCOLA DE DANÇA
            </h2>
          </div>
          <div className="About_Us--Text text-lightShades-1000">
            <p>
              Em 2018, a SoulDance foi fundada com uma simples missão: Fazer da
              dança uma parte integrante da vida de todos nós. Com a entrega e
              dedicação dos mais conceituados professores do mercado,
              trabalhamos para construir um lugar onde os nossos alunos são
              estimulados a descobrir, sem receios, todo o seu potencial e a
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
    </div>
  )
}

export default AboutUs
