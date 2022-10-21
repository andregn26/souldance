import React from "react"
import Logo from "../../UI/Logo"
import Button from "../../UI/Button"
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa"
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet"
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
const coordinates = [38.75726609842309, -9.283417576324181]

const Footer = () => {
  return (
    <div className="FooterContainer">
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

        <div className="Footer-Content">
          {footerColumns.map(({ id, headline, links }) => (
            <div className="Footer-Content-Col">
              <div key={id} className="Footer-Content-Col-Headline">
                {headline}
              </div>
              <ul className="Footer-Content-Col-Links">
                {links.map((link, index) => (
                  <li key={index + 1}>
                    <a href="/">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="Footer-Base">
          <Logo />
          <span className="Footer-Base-Year">
            SoulDance&nbsp;&copy;&nbsp;{new Date().getFullYear()}
          </span>
          <ul className="Footer-Base-Socials">
            {socials.map((icon, index) => (
              <li key={index + 1}>
                <a href="/">{icon}</a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default Footer
