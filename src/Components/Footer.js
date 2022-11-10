import React from "react"
import Logo from "./UI/Logo"
import Button from "./UI/Button"
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
// import "leaflet/dist/leaflet.css"
import L from "leaflet"

delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
})

const footerColumns = [
  {
    id: "1",
    headline: "Sobre Nós",
    links: ["A Nossa História", "Preços e Horários", "Testemunhos"],
  },
  {
    id: "2",
    headline: "Outros Serviços",
    links: ["Alúguer de Espaço", "Aulas para Noivos"],
  },
  {
    id: "3",
    headline: "Conteúdo",
    links: ["Submeter Video", "Submeter Fotografia"],
  },
  {
    id: "4",
    headline: "Social",
    links: ["Facebook", "Instagram", "WhatsApp"],
  },
]

const footerColumnsList = footerColumns.map(({ id, headline, links }) => {
  return (
    <div className="Footer-Content-Col" key={`Column${id}`}>
      <div className="Footer-Content-Col-Headline">{headline}</div>
      <ul className="Footer-Content-Col-Links">
        {links.map((link, index) => (
          <li key={`Link${index}`}>
            <a href="/">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  )
})

const socials = [<FaFacebook />, <FaInstagram />, <FaWhatsapp />]

const socialIconsList = socials.map((socialIcon, index) => {
  return (
    <li key={`Icon${index}`}>
      <a href="/">{socialIcon}</a>
    </li>
  )
})

const coordinates = [38.75726609842309, -9.283417576324181]

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="leaflet-container">
        <MapContainer center={coordinates} zoom={16} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={coordinates}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      <div className="Footer-Newsletter">
        <h4 className="Footer-Newsletter-Headline">Join the SoulDance</h4>
        <span>unsubscribe</span>
        <div className="Footer-Newsletter-Form">
          <input type="email" placeholder="O teu Email" className="Input" />
          <Button className="Footer-Newsletter-Form-Button">Subscribe</Button>
        </div>
      </div>

      <div className="Footer-Content">{footerColumnsList}</div>

      <div className="Footer-Base">
        <Logo />
        <span className="Footer-Base-Year">
          SoulDance&nbsp;&copy;&nbsp;{new Date().getFullYear()}
        </span>
        <ul className="Footer-Base-Socials">{socialIconsList}</ul>
      </div>
    </footer>
  )
}

export default Footer
