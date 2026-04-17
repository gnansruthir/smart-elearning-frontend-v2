import React, { useState, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export default function Login({ onNavigate }) {
  const { login, signup } = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    login(email, password)
    if (onNavigate) onNavigate('dashboard')
  }

  const handleSignup = (e) => {
    e.preventDefault()
    signup(email, password, name || email.split('@')[0])
    if (onNavigate) onNavigate('dashboard')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <div className="w-full max-w-md bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h2 className="text-2xl font-bold mb-4">Welcome back</h2>
        <form onSubmit={handleLogin} className="space-y-3">
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="w-full p-3 bg-gray-900 border border-gray-700 rounded text-sm" />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full p-3 bg-gray-900 border border-gray-700 rounded text-sm" />
          <div className="flex gap-2">
            <button type="submit" className="flex-1 px-4 py-2 bg-accent text-white rounded">Sign in</button>
            <button type="button" onClick={() => { setEmail('guest@demo.com'); setPassword('demo'); login('guest@demo.com','demo'); if (onNavigate) onNavigate('dashboard') }} className="px-3 py-2 bg-gray-700 text-gray-200 rounded">Guest</button>
          </div>
        </form>

        <div className="mt-4 border-t border-gray-700 pt-4">
          <h4 className="text-sm font-semibold mb-2">New here? Create an account</h4>
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" className="w-full p-2 bg-gray-900 border border-gray-700 rounded text-sm mb-2" />
          <div className="flex gap-2">
            <button onClick={handleSignup} className="flex-1 px-4 py-2 bg-green-600 text-white rounded">Sign up</button>
            <button onClick={() => { if (onNavigate) onNavigate('problems') }} className="px-3 py-2 bg-gray-700 text-gray-200 rounded">Explore</button>
          </div>
        </div>
      </div>
    </div>
  )
}
