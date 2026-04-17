import React, { useState } from 'react'
import { Youtube, Search, ExternalLink } from 'lucide-react'

export default function YouTubeHelper() {
  const [query, setQuery] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [showResults, setShowResults] = useState(false)

  const handleSearch = () => {
    if (query.trim()) {
      setSearchQuery(query)
      setShowResults(true)
    }
  }

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText()
      setQuery(text)
    } catch {
      alert('Please allow clipboard access or paste manually')
    }
  }

  const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(searchQuery)}`

  return (
    <div className="card mt-6 border-2 border-red-900/30 bg-red-900/10">
      <div className="flex items-center gap-2 mb-4">
        <Youtube size={24} className="text-red-500" />
        <h3 className="text-lg font-semibold">Need Help? Find Solutions on YouTube</h3>
      </div>

      <p className="text-sm text-gray-400 mb-4">
        Paste the problem statement or question below and find tutorial videos to help you understand the solution better.
      </p>

      {/* Input Section */}
      <div className="space-y-3">
        <textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Paste your coding problem, error message, or algorithm question here..."
          className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-sm resize-none h-24 border border-gray-600"
        />

        {/* Button Group */}
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={handlePaste}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-sm font-medium transition"
          >
            📋 Paste from Clipboard
          </button>
          <button
            onClick={handleSearch}
            disabled={!query.trim()}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm font-medium transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Search size={16} />
            Search YouTube
          </button>
        </div>
      </div>

      {/* Results Section */}
      {showResults && (
        <div className="mt-4 p-4 bg-gray-700/50 rounded-lg border border-red-600/30 animate-slide-up">
          <p className="text-sm text-gray-300 mb-3">
            <span className="font-semibold">Query:</span> "{searchQuery}"
          </p>
          <a
            href={youtubeSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3 bg-red-600/20 border border-red-600/50 rounded-lg hover:bg-red-600/30 transition"
          >
            <span className="flex items-center gap-2 text-red-400 font-medium">
              <Youtube size={18} />
              Open YouTube Search Results
            </span>
            <ExternalLink size={18} />
          </a>
          <p className="text-xs text-gray-500 mt-2">
            💡 Tip: Look for videos from channels like GeeksforGeeks, LearnCode.tv, or your preferred tutor
          </p>
        </div>
      )}

      {/* Info Section */}
      <div className="mt-4 p-3 bg-blue-900/20 border border-blue-600/30 rounded-lg text-xs text-blue-300">
        <p>
          ❓ <strong>Pro Tip:</strong> Include the language, topic name, and specific error message for better results. 
          Example: "Python recursion tutorial" or "LeetCode Two Sum solution"
        </p>
      </div>
    </div>
  )
}
