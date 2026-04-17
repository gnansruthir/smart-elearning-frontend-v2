import React, { createContext, useState } from 'react'

export const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const login = (email, password) => {
    // Mock login
    setUser({ email, username: email.split('@')[0] })
    setIsAuthenticated(true)
  }

  const signup = (email, password, fullName) => {
    setUser({ email, username: fullName.split(' ')[0].toLowerCase(), fullName })
    setIsAuthenticated(true)
  }

  const logout = () => {
    setUser(null)
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

