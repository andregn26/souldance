import React from "react"
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  SVGOverlay,
} from "react-leaflet"
import L from "leaflet"

delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
})

const bounds = [
  [0, 0],
  [10000, -1000000],
]

export default function FooterMap() {
  const coordinates = [38.757193, -9.282692] //38.757193, -9.282692
  return (
    <MapContainer
      className="leaflet-container "
      placeholder
      center={coordinates}
      zoom={16}
      scrollWheelZoom={false}
      style={{ filter: "grayscale(1)" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={coordinates}>
        <Popup>
          <a href="https://goo.gl/maps/2ML3aJ4G1nSVwSfr7">
            Carregue para direções
          </a>
        </Popup>
      </Marker>
    </MapContainer>
  )
}
