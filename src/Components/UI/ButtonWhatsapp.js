import React from "react"

import { FaWhatsapp } from "react-icons/fa"

export default function ButtonWhatsapp() {
  const cellNumber = 351912785503
  const text = "isto%20%C3%A9%20um%20teste"
  return (
    <div className="Wap--Box">
      <div className="Wap--flex">
        <a
          target="_blank"
          rel="noreferrer"
          href={`https://wa.me/${cellNumber}?text=${text}`}
          style={{ color: "#4dc247" }}
          className="Wap--flex--Color"
        >
          <FaWhatsapp
            style={{
              stroke: "white",
              fill: "white",
              strokeWidth: 0,
              height: "95%",
              width: "95%",
            }}
          />
        </a>
      </div>
    </div>
  )
}
