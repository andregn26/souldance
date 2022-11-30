import React, { createContext, useState } from "react"

// create toggle context
export const DarkModeContext = createContext("")

// create context provider
export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div>
      <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
        {children}
      </DarkModeContext.Provider>
    </div>
  )
}
