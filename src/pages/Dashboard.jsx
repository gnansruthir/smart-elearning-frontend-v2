import React, { useContext, useState } from 'react'
import { courses } from '../data'
import CourseCard from '../components/CourseCard'
import CourseModuleViewer from '../components/CourseModuleViewer'
import { UserContext } from '../context/UserContext'
import { Flame, Trophy, BookOpen, Code2 } from 'lucide-react'

export default function Dashboard(){
  const { user } = useContext(UserContext)
  const [selectedCourse, setSelectedCourse] = useState(null)

  const inProgress = courses.filter(c => user.coursesInProgress.includes(c.id))
  const recommended = courses.filter(c => c.recommended)

  return (
    <div className="max-w-6xl mx-auto">
      {/* Welcome Section */}
      <div className="mb-8 animate-fade-in">
        <h1 className="text-4xl font-bold mb-2">Welcome back, <span className="text-accent">{user.username}</span>! 👋</h1>
        <p className="text-gray-400">Keep your coding streak alive and master new languages</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="card interactive-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Daily Streak</p>
              <p className="text-3xl font-bold text-orange-400">{user.streak}</p>
            </div>
            <Flame size={32} className="text-orange-400" />
          </div>
        </div>
        <div className="card interactive-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Problems Solved</p>
              <p className="text-3xl font-bold text-green-400">{user.solvedProblems}</p>
            </div>
            <Trophy size={32} className="text-green-400" />
          </div>
        </div>
        <div className="card interactive-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total Problems</p>
              <p className="text-3xl font-bold text-accent">{user.totalProblems}</p>
            </div>
            <Code2 size={32} className="text-accent" />
          </div>
        </div>
        <div className="card interactive-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Languages</p>
              <p className="text-3xl font-bold text-blue-400">{user.languages.length}</p>
            </div>
            <BookOpen size={32} className="text-blue-400" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid gap-6">
        {/* Courses in Progress */}
        <div className="card animate-slide-up">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Courses in Progress</h2>
            <span className="text-sm text-gray-400">{inProgress.length} courses</span>
          </div>
          {inProgress.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-3">
              {inProgress.map((c, idx) => (
                <div key={c.id} className="animate-slide-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <CourseCard course={c} onContinue={(course) => setSelectedCourse(course)} />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-400">No courses in progress. Start one from recommended!</p>
          )}
        </div>

        {/* Recommended Courses */}
        <div className="card animate-slide-up">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Recommended For You</h2>
            <span className="text-sm text-accent">Based on your progress</span>
          </div>
          <div className="grid md:grid-cols-3 gap-3">
            {recommended.map((c, idx) => (
              <div key={c.id} className="animate-scale-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CourseCard course={c} onContinue={(course) => setSelectedCourse(course)} />
              </div>
            ))}
          </div>
        </div>

        {/* Languages Learned */}
        <div className="card animate-slide-up">
          <h2 className="text-2xl font-bold mb-4">Languages You Know</h2>
          <div className="flex gap-2 flex-wrap">
            {user.languages.map((lang) => (
              <span key={lang} className="px-4 py-2 rounded-full bg-gradient-to-r from-accent/20 to-purple-900/20 border border-accent/30 text-accent font-medium">
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Course Module Viewer Modal */}
      {selectedCourse && (
        <CourseModuleViewer course={selectedCourse} onClose={() => setSelectedCourse(null)} />
      )}
    </div>
  )
}

export function DashboardWithModuleHandler() {
  const dashboardEl = document.querySelector('[class*="Dashboard"]')
  if (dashboardEl) {
    // Find all course cards and add click handlers
    return null
  }
}
