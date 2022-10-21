import React from "react"

const Button = ({ outline, children, onClick, ok }) => {
  return (
    <button
      onClick={onClick}
      className={`${"Button"}${outline ? "-outline" : ""}`}
    >
      {children}
    </button>
  )
}

export default Button
