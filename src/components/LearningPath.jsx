import React from 'react'

export default function LearningPath({ modules = [] }){
  return (
    <div className="card">
      <h3 className="text-lg font-semibold mb-3">Learning Path</h3>
      <div className="flex items-center gap-4 overflow-auto">
        {modules.map((m, i) => (
          <div key={m.id} className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-700 text-sm">{i+1}</div>
            <div className="min-w-[160px]">
              <div className="font-medium">{m.title}</div>
              <div className="text-xs text-gray-400">{m.level}</div>
            </div>
            {i < modules.length - 1 && <div className="w-8 h-px bg-gray-600" />}
          </div>
        ))}
      </div>
    </div>
  )
}
