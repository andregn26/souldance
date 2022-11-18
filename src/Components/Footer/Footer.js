import React from "react"
import FooterContent from "./FooterContent"
import Logo from "../UI/Logo"
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import L from "leaflet"

delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
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
      <div className="Footer--SoMe">
        <Logo />
        <h4 className="Footer-Newsletter-Headline">Join the SoulDance</h4>
        <ul className="Footer-Base-Socials">{socialIconsList}</ul>
      </div>

      <MapContainer
        className="leaflet-container "
        placeholder
        center={coordinates}
        zoom={16}
        scrollWheelZoom={false}
      >
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
      <FooterContent />
      <div className="Footer-Base">
        <span className="Footer-Base-Year">
          SoulDance&nbsp;&copy;&nbsp;{new Date().getFullYear()}
        </span>
      </div>
    </footer>
  )
}

export default Footer
