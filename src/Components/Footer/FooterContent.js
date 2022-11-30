import React from "react"
import { Fragment } from "react"

const footerColumns = [
  {
    id: 1,
    headline: "Sobre Nós",
    links: ["A Nossa História", "Preços e Horários", "Testemunhos"],
  },
  {
    id: 2,
    headline: "Outros Serviços",
    links: ["Alúguer de Espaço", "Aulas para Noivos"],
  },
  {
    id: 3,
    headline: "Conteúdo",
    links: ["Submeter Video", "Submeter Fotografia"],
  },
  {
    id: 4,
    headline: "Social",
    links: ["Facebook", "Instagram", "WhatsApp"],
  },
]

export default function FooterContent() {
  return (
    <Fragment>
      {footerColumns.map((column) => (
        <div className="Footer-Content-Col" key={`column${column.id}`}>
          <div className="Footer-Content-Col-Headline">{column.headline}</div>
          <ul className="Footer-Content-Col-Links">
            {column.links.map((link, index) => (
              <li key={`Link${index}`}>
                <a href="/">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Fragment>
  )
}
