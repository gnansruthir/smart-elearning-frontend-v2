import React from 'react'
import { codeSnippets } from '../utils/codeSnippets'

export default function EditorPlaceholder({ selectedLanguage = 'java' }) {
  const code = codeSnippets[selectedLanguage] || codeSnippets.java
  
  const languageNames = {
    java: 'Java',
    python: 'Python',
    cpp: 'C++',
    c: 'C',
    sql: 'SQL',
    javascript: 'JavaScript'
  }

  return (
    <div className="card h-full flex flex-col">
      <div className="mb-3">
        <div className="text-sm text-gray-400 mb-2">Code Editor ({languageNames[selectedLanguage]})</div>
        <div className="code-block h-96 overflow-auto whitespace-pre-wrap break-words font-mono text-sm">
          <code>{code}</code>
        </div>
      </div>
      <div className="mt-auto flex gap-2">
        <button className="flex-1 px-3 py-2 rounded-lg bg-accent hover:bg-accent/90 text-white text-sm font-medium transition">
          ▶ Run
        </button>
        <button className="flex-1 px-3 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white text-sm font-medium transition">
          ✓ Submit
        </button>
      </div>
      <div className="mt-3 text-xs text-gray-400">
        💡 Real code editor integration coming soon! Currently showing code templates.
      </div>
    </div>
  )
}
