import React, { createContext, useState } from 'react'
import { userProgress } from '../data'

export const UserContext = createContext(null)

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(userProgress)

  const updateStreak = (n) => setUser((u) => ({ ...u, streak: n }))

  return (
    <UserContext.Provider value={{ user, setUser, updateStreak }}>
      {children}
    </UserContext.Provider>
  )
}
