import React from "react"
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa"

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

const socials = [<FaFacebook />, <FaInstagram />, <FaWhatsapp />]

const Footer = () => {
  return (
    <div className="FooterContainer">
      <footer className="Footer">
        <div className="Footer-Newsletter">
          <h4 className="Footer-Newsletter-Headline">Join the SoulDance</h4>
          <span>unsubscribe</span>
        </div>
        <div className="Footer-Content">{socials}</div>
      </footer>
    </div>
  )
}

export default Footer
