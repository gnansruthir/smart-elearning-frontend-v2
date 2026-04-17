import React, { useState, useContext } from 'react'
import { UserProvider } from './context/UserContext'
import { AuthProvider, AuthContext } from './context/AuthContext'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import WorkspaceAdvanced from './pages/WorkspaceAdvanced'
import RoadmapAdvanced from './pages/RoadmapAdvanced'
import ProblemsTab from './pages/ProblemsTab'
import Login from './pages/Login'

function AppContent() {
  const [route, setRoute] = useState('dashboard')
  const { isAuthenticated } = useContext(AuthContext)

  if (!isAuthenticated) {
    return <Login onNavigate={setRoute} />
  }

  return (
    <UserProvider>
      <div className="min-h-screen">
        <Navbar onNavigate={setRoute} current={route} />
        <main className="p-4 md:p-8 bg-gray-900">
          {route === 'dashboard' && <Dashboard />}
          {route === 'problems' && <ProblemsTab />}
          {route === 'workspace' && <WorkspaceAdvanced />}
          {route === 'roadmap' && <RoadmapAdvanced />}
        </main>
      </div>
    </UserProvider>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  )
}
