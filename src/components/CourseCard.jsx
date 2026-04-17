import React from 'react'
import { ArrowRight, Code2, Star } from 'lucide-react'

export default function CourseCard({ course, onContinue }) {
  return (
    <div className="card interactive-card group">
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-lg font-semibold group-hover:text-accent transition">{course.title}</h3>
            {course.progress > 50 && <Star size={16} className="text-yellow-400 fill-yellow-400" />}
          </div>
          <p className="text-sm text-gray-400">{course.level}</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-accent">{course.progress}%</p>
          <p className="text-xs text-gray-500">{course.problems} problems</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-700 h-2 rounded-full mt-3 overflow-hidden mb-3">
        <div
          style={{ width: `${course.progress}%` }}
          className="h-full bg-gradient-to-r from-accent to-purple-500 transition-all duration-500"
        ></div>
      </div>

      {/* Languages */}
      <div className="flex gap-1 flex-wrap mb-3">
        {course.languages.slice(0, 3).map((lang) => (
          <span key={lang} className="px-2 py-1 text-xs bg-gray-700 text-gray-200 rounded-full">
            {lang}
          </span>
        ))}
        {course.languages.length > 3 && <span className="px-2 py-1 text-xs bg-gray-700 text-gray-400">+{course.languages.length - 3}</span>}
      </div>

      {/* Continue Button */}
      <button 
        onClick={() => onContinue?.(course)}
        className="w-full mt-3 px-3 py-2 rounded-lg bg-accent hover:bg-accent/90 text-white text-sm font-medium flex items-center justify-center gap-2 transition">
        {course.progress > 0 ? 'Continue' : 'Start'}
        <ArrowRight size={16} />
      </button>
    </div>
  )
}
