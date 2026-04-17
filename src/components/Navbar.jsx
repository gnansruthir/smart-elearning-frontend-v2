import React, { useState, useContext } from 'react'
import { Search, Bell, User, LogOut, Menu, X } from 'lucide-react'
import { AuthContext } from '../context/AuthContext'

export default function Navbar({ onNavigate, current }) {
  const [q, setQ] = useState('')
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const { user, logout } = useContext(AuthContext)

  const navItems = [
    { label: 'Dashboard', id: 'dashboard' },
    { label: 'Problems', id: 'problems' },
    { label: 'Workspace', id: 'workspace' },
    { label: 'Roadmap', id: 'roadmap' }
  ]

  const handleLogout = () => {
    logout()
    onNavigate('login')
    setShowUserMenu(false)
  }

  return (
    <header className="border-b border-gray-800 sticky top-0 z-40 bg-gray-900/95 backdrop-blur">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 p-4">
        {/* Logo */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <div className="text-2xl font-bold text-white cursor-pointer hover:text-accent transition" onClick={() => onNavigate('dashboard')}>
            Smart<span className="text-accent">Code</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`px-3 py-1 rounded-lg transition ${
                current === item.id ? 'text-accent bg-gray-800' : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Search Bar */}
        <div className="flex-1 hidden md:block max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-2 text-gray-400" size={16} />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search courses..."
              className="w-full pl-9 pr-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-lg hover:bg-gray-800 transition relative">
            <Bell size={18} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* User Menu */}
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-800 transition"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-purple-600 flex items-center justify-center text-xs font-bold">
                {user?.username?.[0]?.toUpperCase() || 'D'}
              </div>
              <span className="hidden sm:block text-sm font-medium">{user?.username || 'User'}</span>
            </button>

            {/* User Dropdown */}
            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-2 animate-slide-up">
                <div className="px-3 py-2 border-b border-gray-700">
                  <p className="text-sm font-medium">{user?.email}</p>
                </div>
                <button className="w-full text-left px-3 py-2 hover:bg-gray-700 rounded text-sm flex items-center gap-2 mt-1">
                  <User size={16} /> Profile
                </button>
                <button className="w-full text-left px-3 py-2 hover:bg-gray-700 rounded text-sm flex items-center gap-2">
                  Settings
                </button>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-3 py-2 hover:bg-red-900/30 text-red-400 rounded text-sm flex items-center gap-2 mt-2 border-t border-gray-700 pt-2"
                >
                  <LogOut size={16} /> Logout
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setShowMobileMenu(!showMobileMenu)} className="md:hidden p-2 hover:bg-gray-800 rounded-lg">
            {showMobileMenu ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="md:hidden border-t border-gray-800 p-4 space-y-2 animate-slide-up">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id)
                setShowMobileMenu(false)
              }}
              className={`block w-full text-left px-3 py-2 rounded-lg transition ${
                current === item.id ? 'bg-accent text-white' : 'text-gray-400 hover:bg-gray-800'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up { animation: slideUp 0.2s ease-out; }
      `}</style>
    </header>
  )
}
