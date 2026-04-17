import React, { useState } from 'react'
import { problems } from '../data'
import { Code2, ThumbsUp, Users, Filter } from 'lucide-react'

const difficultyColors = {
  Easy: 'text-green-400',
  Medium: 'text-yellow-400',
  Hard: 'text-red-400'
}

const difficultyBg = {
  Easy: 'bg-green-900/30',
  Medium: 'bg-yellow-900/30',
  Hard: 'bg-red-900/30'
}

export default function Problems() {
  const [selectedDifficulty, setSelectedDifficulty] = useState('All')
  const [selectedLanguage, setSelectedLanguage] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const languages = ['All', 'Java', 'Python', 'C++', 'JavaScript']
  const difficulties = ['All', 'Easy', 'Medium', 'Hard']

  const filtered = problems.filter((p) => {
    const matchDiff = selectedDifficulty === 'All' || p.difficulty === selectedDifficulty
    const matchLang = selectedLanguage === 'All' || p.languages.includes(selectedLanguage)
    const matchSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.category.toLowerCase().includes(searchTerm.toLowerCase())
    return matchDiff && matchLang && matchSearch
  })

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Coding Problems</h1>
        <p className="text-gray-400">Master algorithms and data structures</p>
      </div>

      {/* Search & Filters */}
      <div className="card mb-6">
        <div className="space-y-4">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search problems..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          />

          {/* Filter Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Difficulty Filter */}
            <div>
              <label className="text-sm text-gray-300 mb-2 block">Difficulty</label>
              <div className="flex gap-2 flex-wrap">
                {difficulties.map((d) => (
                  <button
                    key={d}
                    onClick={() => setSelectedDifficulty(d)}
                    className={`px-3 py-1 rounded-lg text-sm font-medium transition ${
                      selectedDifficulty === d
                        ? 'bg-accent text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* Language Filter */}
            <div>
              <label className="text-sm text-gray-300 mb-2 block">Language</label>
              <div className="flex gap-2 flex-wrap">
                {languages.map((l) => (
                  <button
                    key={l}
                    onClick={() => setSelectedLanguage(l)}
                    className={`px-3 py-1 rounded-lg text-sm font-medium transition ${
                      selectedLanguage === l
                        ? 'bg-accent text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Problems List */}
      <div className="space-y-3">
        {filtered.length === 0 ? (
          <div className="card text-center py-8 text-gray-400">No problems match your filters</div>
        ) : (
          filtered.map((p) => (
            <div
              key={p.id}
              className={`card hover:border-accent/50 transition cursor-pointer group ${
                p.solved ? 'border-green-600/30' : ''
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                {/* Title & Status */}
                <div className="md:col-span-2">
                  <div className="flex items-center gap-3">
                    {p.solved && (
                      <div className="w-5 h-5 rounded-full bg-green-600 flex items-center justify-center text-xs">
                        ✓
                      </div>
                    )}
                    <div>
                      <h3 className="font-semibold group-hover:text-accent transition">{p.title}</h3>
                      <p className="text-sm text-gray-400">{p.category}</p>
                    </div>
                  </div>
                </div>

                {/* Difficulty & Acceptance */}
                <div className="flex gap-2 items-center">
                  <span className={`px-3 py-1 rounded text-sm font-medium ${difficultyBg[p.difficulty]} ${difficultyColors[p.difficulty]}`}>
                    {p.difficulty}
                  </span>
                  <span className="text-sm text-gray-400">{p.acceptanceRate}%</span>
                </div>

                {/* Languages */}
                <div className="flex gap-1 flex-wrap">
                  {p.languages.slice(0, 2).map((lang) => (
                    <span key={lang} className="px-2 py-1 text-xs bg-gray-700 text-gray-200 rounded">
                      {lang}
                    </span>
                  ))}
                  {p.languages.length > 2 && <span className="px-2 py-1 text-xs bg-gray-700 text-gray-400">+{p.languages.length - 2}</span>}
                </div>

                {/* Likes */}
                <div className="flex items-center justify-end gap-2 text-sm text-gray-400">
                  <ThumbsUp size={16} />
                  <span>{(p.likes / 1000).toFixed(1)}k</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Stats Summary */}
      <div className="mt-8 grid grid-cols-3 gap-4">
        <div className="card text-center">
          <div className="text-2xl font-bold text-accent">{filtered.filter(p => p.difficulty === 'Easy').length}</div>
          <div className="text-sm text-gray-400">Easy</div>
        </div>
        <div className="card text-center">
          <div className="text-2xl font-bold text-yellow-400">{filtered.filter(p => p.difficulty === 'Medium').length}</div>
          <div className="text-sm text-gray-400">Medium</div>
        </div>
        <div className="card text-center">
          <div className="text-2xl font-bold text-red-400">{filtered.filter(p => p.difficulty === 'Hard').length}</div>
          <div className="text-sm text-gray-400">Hard</div>
        </div>
      </div>
    </div>
  )
}
