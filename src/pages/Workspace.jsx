import React, { useState } from 'react'
import { lessons } from '../data'
import LessonMarkdown from '../components/LessonMarkdown'
import EditorPlaceholder from '../components/EditorPlaceholder'
import LanguageSwitcher from '../components/LanguageSwitcher'
import YouTubeHelper from '../components/YouTubeHelper'

export default function Workspace(){
  const [selectedLanguage, setSelectedLanguage] = useState('java')
  
  // Select lesson based on language
  const getLessonForLanguage = (lang) => {
    const lessonMap = {
      java: lessons['java-basics'],
      python: lessons['python-dsa'],
      cpp: lessons['cpp-advanced'],
      c: lessons['cpp-advanced'],
      sql: lessons['sql-foundations'],
      javascript: lessons['java-basics']
    }
    return lessonMap[lang] || lessons['java-basics']
  }

  const lesson = getLessonForLanguage(selectedLanguage)

  return (
    <div className="max-w-6xl mx-auto">
      {/* Language Switcher */}
      <LanguageSwitcher selectedLanguage={selectedLanguage} onLanguageChange={setSelectedLanguage} />

      {/* Main Workspace Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Lesson Section */}
        <div>
          <LessonMarkdown lesson={lesson} />
        </div>

        {/* Code Editor Section */}
        <div>
          <EditorPlaceholder selectedLanguage={selectedLanguage} />
        </div>
      </div>

      {/* YouTube Helper Section */}
      <YouTubeHelper />
    </div>
  )
}
