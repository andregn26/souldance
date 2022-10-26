import React from "react"

const Button = ({ className = "", children, onClick }) => {
  return (
    <button onClick={onClick} className={`PrimaryButton ${className}`}>
      {children}
    </button>
  )
}

export default Button
