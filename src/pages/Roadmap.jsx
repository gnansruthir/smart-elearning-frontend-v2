import React from 'react'
import { courses } from '../data'
import LearningPath from '../components/LearningPath'

export default function Roadmap(){
  const modules = [
    { id: 'java-basics', title: 'Java Basics', level: 'Beginner' },
    { id: 'java-oop', title: 'OOP in Java', level: 'Intermediate' },
    { id: 'java-collections', title: 'Collections & Streams', level: 'Intermediate' },
    { id: 'sql-foundations', title: 'SQL Foundations', level: 'Beginner' }
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <LearningPath modules={modules} />
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {courses.map(c => (
          <div key={c.id} className="card">
            <div className="flex justify-between items-center">
              <div>
                <div className="font-semibold">{c.title}</div>
                <div className="text-sm text-gray-400">{c.level}</div>
              </div>
              <div className="text-sm text-gray-300">{c.progress}%</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
