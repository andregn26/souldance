import React from "react"

//TODO Perceber porque é que o map não está a funcionar

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
const footerColumnsList = footerColumns.map((column, links) => {
  return (
    <div className="Footer-Content-Col" key={`column${column.id}`}>
      <div className="Footer-Content-Col-Headline">{column.headline}</div>
      <ul className="Footer-Content-Col-Links">
        {links.map((link, index) => (
          <li key={`Link${index}`}>
            <a href="/">{link.links}</a>
          </li>
        ))}
      </ul>
    </div>
  )
})
export default function FooterContent() {
  return <div className="Footer-Content">{footerColumnsList}</div>
}
