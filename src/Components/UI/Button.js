import React from "react"

export function ButtonFillLight({ className = "", children, onClick }) {
  return (
    <button onClick={onClick} className={`ButtonFillLight ${className}`}>
      {children}
    </button>
  )
}
export function ButtonFillDark({ className = "", children, onClick }) {
  return (
    <button onClick={onClick} className={`ButtonFillDark ${className}`}>
      {children}
    </button>
  )
}

export function ButtonOutlineLight({ className = "", children, onClick }) {
  return (
    <button onClick={onClick} className={`ButtonOutlineLight ${className}`}>
      {children}
    </button>
  )
}
export function ButtonOutlineDark({ className = "", children, onClick }) {
  return (
    <button onClick={onClick} className={`ButtonOutlineDark ${className}`}>
      {children}
    </button>
  )
}

export function ButtonModal({ className = "", children, onClick }) {
  return (
    <button onClick={onClick} className={`ButtonModal ${className}`}>
      {children}
    </button>
  )
}
