import React from 'react'
import { Code2 } from 'lucide-react'

export default function LanguageSwitcher({ selectedLanguage, onLanguageChange }) {
  const languages = [
    { id: 'java', name: 'Java', icon: '☕' },
    { id: 'python', name: 'Python', icon: '🐍' },
    { id: 'cpp', name: 'C++', icon: '⚙️' },
    { id: 'c', name: 'C', icon: '🔤' },
    { id: 'sql', name: 'SQL', icon: '🗄️' },
    { id: 'javascript', name: 'JavaScript', icon: '📜' }
  ]

  return (
    <div className="card mb-6">
      <div className="flex items-center gap-2 mb-4">
        <Code2 size={20} className="text-accent" />
        <h3 className="font-semibold">Select Language</h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
        {languages.map((lang) => (
          <button
            key={lang.id}
            onClick={() => onLanguageChange(lang.id)}
            className={`px-3 py-2 rounded-lg font-medium text-sm transition flex items-center justify-center gap-1 ${
              selectedLanguage === lang.id
                ? 'bg-accent text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            <span>{lang.icon}</span>
            {lang.name}
          </button>
        ))}
      </div>
    </div>
  )
}
