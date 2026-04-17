import React, { useState } from 'react'
import { lessons } from '../data'
import { questionsByDifficultyAndLanguage, topMentors } from '../data/expanded'
import LessonMarkdown from '../components/LessonMarkdown'
import EditorPlaceholder from '../components/EditorPlaceholder'
import LanguageSwitcher from '../components/LanguageSwitcher'
import YouTubeHelper from '../components/YouTubeHelper'
import CodingConsole from '../components/CodingConsole'
import { BookOpen, Code2, MessageCircle, Video, Star, Youtube, Mail, Linkedin, X } from 'lucide-react'

export default function Workspace(){
  const [selectedLanguage, setSelectedLanguage] = useState('java')
  const [selectedDifficulty, setSelectedDifficulty] = useState(null)
  const [selectedQuestion, setSelectedQuestion] = useState(null)
  const [showCodingConsole, setShowCodingConsole] = useState(false)
  const [selectedMentor, setSelectedMentor] = useState(null)
  const [showChatModal, setShowChatModal] = useState(false)
  const [showMeetModal, setShowMeetModal] = useState(false)
  const [selectedPerson, setSelectedPerson] = useState(null)
  const [chatMessage, setChatMessage] = useState('')
  const [generatedMeetLink, setGeneratedMeetLink] = useState('')
  const [meetLinkCopied, setMeetLinkCopied] = useState(false)

  const openChatWith = (person, template) => {
    setSelectedPerson(person)
    setChatMessage(template || `Hi ${person.name}, I have a question.`)
    setShowChatModal(true)
  }

  const openMeetWith = (person) => {
    const id = Math.random().toString(36).slice(2,11)
    const link = `https://meet.google.com/${id}`
    setSelectedPerson(person)
    setGeneratedMeetLink(link)
    setMeetLinkCopied(false)
    setShowMeetModal(true)
  }

  const handleCopyMeetLink = async () => {
    try {
      await navigator.clipboard.writeText(generatedMeetLink)
      setMeetLinkCopied(true)
    } catch (e) {
      setMeetLinkCopied(false)
    }
  }

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
  const questionsForDifficulty = selectedDifficulty 
    ? questionsByDifficultyAndLanguage[selectedDifficulty]?.[selectedLanguage] || []
    : []

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

      {/* Difficulty Level Selector */}
      <div className="card mb-6">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen size={20} className="text-accent" />
          <h3 className="text-xl font-bold">Practice by Difficulty</h3>
        </div>
        <p className="text-gray-400 text-sm mb-4">
          Select a difficulty level to see beginner-friendly and intermediate problems for {selectedLanguage.toUpperCase()}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-3 max-w-md">
          <button
            onClick={() => {
              setSelectedDifficulty('beginner')
              setSelectedQuestion(null)
            }}
            className={`px-4 py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2 ${
              selectedDifficulty === 'beginner'
                ? 'bg-green-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            🌱 Beginner
          </button>
          <button
            onClick={() => {
              setSelectedDifficulty('medium')
              setSelectedQuestion(null)
            }}
            className={`px-4 py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2 ${
              selectedDifficulty === 'medium'
                ? 'bg-yellow-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            ⚡ Medium
          </button>
        </div>
      </div>

      {/* Questions List */}
      {selectedDifficulty && (
        <div className="card mb-6 animate-slide-up">
          <div className="flex items-center gap-2 mb-4">
            <Code2 size={20} className="text-accent" />
            <h3 className="text-xl font-bold">
              {selectedDifficulty.charAt(0).toUpperCase() + selectedDifficulty.slice(1)} Problems in {selectedLanguage.toUpperCase()}
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {questionsForDifficulty.map((q, idx) => (
              <div
                key={q.id}
                onClick={() => setSelectedQuestion(q)}
                className={`p-4 rounded-lg cursor-pointer transition border-2 ${
                  selectedQuestion?.id === q.id
                    ? 'border-accent bg-accent/10'
                    : 'border-gray-700 bg-gray-800 hover:border-accent/50'
                }`}
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <h4 className="font-semibold mb-1">{q.title}</h4>
                <p className="text-xs text-gray-400">{q.category}</p>
              </div>
            ))}
          </div>

          {/* Selected Question Detail */}
          {selectedQuestion && (
            <div className="mt-6 p-4 bg-gradient-to-r from-accent/20 to-purple-900/20 border border-accent/30 rounded-lg animate-scale-up">
              <h4 className="text-lg font-bold mb-2">{selectedQuestion.title}</h4>
              <p className="text-sm text-gray-300 mb-3">
                Category: <span className="font-semibold text-accent">{selectedQuestion.category}</span>
              </p>
              <p className="text-sm text-gray-400 mb-4">
                This is a {selectedDifficulty} level problem in {selectedLanguage.toUpperCase()}. Test your skills by solving it in the editor above!
              </p>
              <div className="flex gap-2">
                <button 
                  onClick={() => setShowCodingConsole(true)}
                  className="flex-1 px-4 py-2 bg-accent hover:bg-accent/90 text-white font-medium rounded-lg transition">
                  Start Coding Challenge →
                </button>
                <a
                  href={`https://www.youtube.com/results?search_query=${selectedQuestion.title}+solution`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-red-600/20 hover:bg-red-600/30 text-red-400 font-medium rounded-lg transition border border-red-600/30 flex items-center gap-2"
                >
                  📺 Need Help?
                </a>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Coding Console Modal */}
      {showCodingConsole && selectedQuestion && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 overflow-y-auto">
          <div className="min-h-screen py-4">
            <div className="max-w-7xl mx-auto relative">
              <button
                onClick={() => setShowCodingConsole(false)}
                className="absolute top-4 right-4 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-100 rounded-lg font-medium z-10"
              >
                ✕ Close
              </button>
              <div className="bg-gray-900/95 rounded-lg border border-gray-700 p-6 mt-8">
                <CodingConsole question={selectedQuestion} language={selectedLanguage} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* YouTube Helper Section */}
      <YouTubeHelper />

      {/* Learn from Experts Section */}
      <div className="card mb-6 animate-slide-up">
        <div className="flex items-center gap-2 mb-4">
          <Star size={24} className="text-accent" />
          <h2 className="text-2xl font-bold">Learn from Experts</h2>
          <span className="ml-auto text-xs bg-accent/20 text-accent px-3 py-1 rounded-full">Top 5 Mentors</span>
        </div>
        <p className="text-gray-400 text-sm mb-6">
          Get personalized guidance from industry experts and experienced mentors. Connect via chat, schedule meetings, or learn from YouTube resources.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {topMentors.map((mentor, idx) => (
            <div
              key={mentor.id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-5 rounded-lg border border-gray-700 hover:border-accent/50 transition hover:shadow-lg hover:shadow-accent/10"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-accent to-purple-600 flex items-center justify-center font-bold text-white text-sm">
                  {mentor.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex items-center gap-1 bg-yellow-500/20 px-2 py-1 rounded">
                  <Star size={14} className="text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-bold text-yellow-400">{mentor.rating}</span>
                </div>
              </div>

              <h3 className="font-bold text-lg mb-1">{mentor.name}</h3>
              <p className="text-sm text-accent font-semibold mb-2">{mentor.specialization}</p>
              <p className="text-xs text-gray-400 mb-3">{mentor.bio}</p>

              <div className="space-y-2 mb-4 pt-3 border-t border-gray-700">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500">👥 Students:</span>
                  <span className="text-gray-300 font-medium">{(mentor.students / 1000).toFixed(0)}K helped</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500">⏱️ Response:</span>
                  <span className="text-green-400 font-medium">~10 min</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500">📅 Available:</span>
                  <span className="text-blue-400 font-medium">Mon-Fri 6-8 PM</span>
                </div>
                <div className="text-xs">
                  <span className="text-gray-500">📚 Expertise:</span>
                  <div className="flex gap-1 flex-wrap mt-1">
                    {mentor.expertise?.slice(0, 3).map((exp, i) => (
                      <span key={i} className="px-2 py-0.5 bg-accent/20 text-accent rounded text-xs">
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <button onClick={() => openChatWith(mentor, `Hi ${mentor.name}, I'd like to ask about ${mentor.specialization}`)} className="flex items-center justify-center gap-1.5 px-3 py-2 bg-green-600/20 hover:bg-green-600/30 text-green-400 rounded text-xs font-medium transition border border-green-600/30">
                  <MessageCircle size={14} />
                  Chat
                </button>
                <button onClick={() => openMeetWith(mentor)} className="flex items-center justify-center gap-1.5 px-3 py-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 rounded text-xs font-medium transition border border-blue-600/30">
                  <Video size={14} />
                  Meet
                </button>
                <a
                  href={`https://www.youtube.com/results?search_query=${mentor.name}+${mentor.specialization}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 px-3 py-2 bg-red-600/20 hover:bg-red-600/30 text-red-400 rounded text-xs font-medium transition border border-red-600/30 col-span-2"
                >
                  <Youtube size={14} />
                  Learn on YouTube
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Modal */}
      {showChatModal && selectedPerson && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="w-full max-w-lg bg-gray-900 rounded-lg p-5 border border-gray-700">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-bold">Chat with {selectedPerson.name}</h3>
              <button onClick={() => setShowChatModal(false)} className="p-1 rounded hover:bg-gray-800">
                <X />
              </button>
            </div>
            <p className="text-sm text-gray-400 mb-3">This is an in-app chat simulation. Messages are not sent to a server.</p>
            <textarea value={chatMessage} onChange={(e) => setChatMessage(e.target.value)} className="w-full h-32 bg-gray-800 border border-gray-700 rounded p-3 text-sm text-gray-100 font-mono resize-none" />
            <div className="flex items-center gap-3 mt-3">
              <button onClick={() => { setShowChatModal(false); /* simulate send */ }} className="px-4 py-2 bg-accent text-white rounded">Send</button>
              <button onClick={() => setShowChatModal(false)} className="px-4 py-2 bg-gray-800 text-gray-300 rounded">Close</button>
            </div>
          </div>
        </div>
      )}

      {/* Meet Modal */}
      {showMeetModal && selectedPerson && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="w-full max-w-md bg-gray-900 rounded-lg p-5 border border-gray-700">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-bold">Schedule Meet with {selectedPerson.name}</h3>
              <button onClick={() => setShowMeetModal(false)} className="p-1 rounded hover:bg-gray-800">
                <X />
              </button>
            </div>
            <p className="text-sm text-gray-400 mb-3">A temporary Google Meet link has been generated. Share it with your peer/mentor.</p>
            <div className="bg-gray-800 border border-gray-700 rounded p-3 mb-3 font-mono text-sm text-gray-100">
              <a href={generatedMeetLink} target="_blank" rel="noopener noreferrer" className="break-all text-accent underline">{generatedMeetLink}</a>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={handleCopyMeetLink} className="px-4 py-2 bg-blue-600 text-white rounded">{meetLinkCopied ? 'Copied' : 'Copy Link'}</button>
              <a href={generatedMeetLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-800 text-gray-100 rounded">Open Meet</a>
              <button onClick={() => setShowMeetModal(false)} className="ml-auto px-3 py-2 bg-gray-700 text-gray-200 rounded">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}