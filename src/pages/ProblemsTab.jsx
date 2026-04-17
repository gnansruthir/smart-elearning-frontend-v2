import React, { useState } from 'react'
import { problemSources, topCompanies, topPeers, topMentors } from '../data/expanded'
import { Code2, Building2, Users, ChevronDown, MessageCircle, Video, Star, BookOpen, X } from 'lucide-react'

const tabs = [
  { id: 'leetcode', label: 'LeetCode', icon: '📘' },
  { id: 'hackerrank', label: 'HackerRank', icon: '🎯' },
  { id: 'interview', label: 'Interview Prep', icon: '💼' }
]

export default function ProblemsTab() {
  const [activeTab, setActiveTab] = useState('leetcode')
  const [selectedCompany, setSelectedCompany] = useState(null)
  const [selectedPlatform, setSelectedPlatform] = useState(null)
  const [expandedCompany, setExpandedCompany] = useState(null)
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

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Practice Problems</h1>
        <p className="text-gray-400">Choose your platform and start solving!</p>
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

      {/* Tab Navigation */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id)
              setSelectedCompany(null)
              setExpandedCompany(null)
            }}
            className={`p-4 rounded-lg font-semibold transition flex items-center justify-center gap-2 ${
              activeTab === tab.id
                ? 'bg-accent text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            <span className="text-xl">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* LeetCode Tab */}
      {activeTab === 'leetcode' && (
        <div className="animate-slide-up">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {problemSources.leetcode.map((problem, idx) => (
              <div
                key={problem.id}
                className="card interactive-card hover:border-accent/50"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-lg flex-1">{problem.title}</h3>
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      problem.difficulty === 'Easy'
                        ? 'bg-green-900/30 text-green-400'
                        : problem.difficulty === 'Medium'
                        ? 'bg-yellow-900/30 text-yellow-400'
                        : 'bg-red-900/30 text-red-400'
                    }`}
                  >
                    {problem.difficulty}
                  </span>
                </div>
                <p className="text-sm text-gray-400 mb-3">{problem.category}</p>
                <a
                  href={problem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-3 py-2 rounded bg-accent hover:bg-accent/90 text-white text-sm font-medium transition"
                >
                  Solve on LeetCode →
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* HackerRank Tab */}
      {activeTab === 'hackerrank' && (
        <div className="animate-slide-up">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {problemSources.hackerrank.map((problem, idx) => (
              <div
                key={problem.id}
                className="card interactive-card hover:border-blue-500/50"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-lg flex-1">{problem.title}</h3>
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      problem.difficulty === 'Easy'
                        ? 'bg-green-900/30 text-green-400'
                        : problem.difficulty === 'Medium'
                        ? 'bg-yellow-900/30 text-yellow-400'
                        : 'bg-red-900/30 text-red-400'
                    }`}
                  >
                    {problem.difficulty}
                  </span>
                </div>
                <p className="text-sm text-gray-400 mb-3">{problem.category}</p>
                <a
                  href={problem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-3 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition"
                >
                  Solve on HackerRank →
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Interview Prep Tab */}
      {activeTab === 'interview' && (
        <div className="animate-slide-up">
          <div className="mb-6">
            <p className="text-gray-400 mb-4">Select a top company to see their most asked interview questions:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {topCompanies.map((company) => (
                <button
                  key={company.id}
                  onClick={() => setSelectedCompany(company.id)}
                  className={`p-4 rounded-lg font-semibold transition flex items-center gap-2 ${
                    selectedCompany === company.id
                      ? 'bg-accent text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <span className="text-2xl">{company.logo}</span>
                  <span className="text-sm">{company.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Company Questions */}
          {selectedCompany && (
            <div>
              {topCompanies
                .filter((c) => c.id === selectedCompany)
                .map((company) => (
                  <div key={company.id}>
                    <div className="card mb-6">
                      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <span className="text-3xl">{company.logo}</span>
                        {company.name} - Top Interview Questions
                      </h2>

                      {/* Platform selectors */}
                      <div className="flex gap-3 mb-4">
                        <button
                          onClick={() => setSelectedPlatform('leetcode')}
                          className={`flex-1 p-3 rounded-lg font-semibold transition ${
                            selectedPlatform === 'leetcode' ? 'bg-accent text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                          }`}
                        >
                          LeetCode
                        </button>
                        <button
                          onClick={() => setSelectedPlatform('hackerrank')}
                          className={`flex-1 p-3 rounded-lg font-semibold transition ${
                            selectedPlatform === 'hackerrank' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                          }`}
                        >
                          HackerRank
                        </button>
                      </div>

                      {/* Questions list for selected platform */}
                      {selectedPlatform ? (
                        <div className="space-y-3">
                          {company.questions.map((q, idx) => {
                            // map frequency to a numeric probability and times asked
                            const freqMap = { 'Very High': 80, High: 60, Medium: 35, Low: 10 }
                            const timesMap = { 'Very High': 45, High: 25, Medium: 10, Low: 3 }
                            const probability = freqMap[q.frequency] || 20
                            const timesAsked = timesMap[q.frequency] || 5

                            const url = selectedPlatform === 'leetcode'
                              ? `https://leetcode.com/problems/?search=${encodeURIComponent(q.title)}`
                              : `https://www.hackerrank.com/search?query=${encodeURIComponent(q.title)}`

                            return (
                              <div key={idx} className="p-4 bg-gray-700/50 border border-gray-600 rounded-lg hover:border-accent/50 transition group">
                                <div className="flex items-start justify-between">
                                  <div className="flex-1">
                                    <a
                                      href={url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="font-semibold group-hover:text-accent transition mb-2 block"
                                    >
                                      {q.title}
                                    </a>
                                    <div className="flex gap-2 flex-wrap text-xs mb-2">
                                      <span className="px-2 py-1 bg-gray-600 rounded-full text-gray-300">{q.topic}</span>
                                      <span className={`px-2 py-1 rounded-full ${q.difficulty === 'Easy' ? 'bg-green-900/30 text-green-400' : q.difficulty === 'Medium' ? 'bg-yellow-900/30 text-yellow-400' : 'bg-red-900/30 text-red-400'}`}>{q.difficulty}</span>
                                    </div>
                                    <div className="text-xs text-gray-300">
                                      <span className="mr-3">Times asked: <strong className="text-white">{timesAsked}</strong></span>
                                      <span>Probability next interview: <strong className="text-white">{probability}%</strong></span>
                                    </div>
                                  </div>
                                  <div className="ml-4 text-right">
                                    <div className={`px-2 py-1 rounded text-sm font-medium ${q.frequency === 'Very High' ? 'bg-red-600/30 text-red-400' : q.frequency === 'High' ? 'bg-orange-600/30 text-orange-400' : 'bg-blue-600/30 text-blue-400'}`}>{q.frequency}</div>
                                  </div>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      ) : (
                        <p className="text-sm text-gray-400">Select a platform above to view company-specific questions on LeetCode or HackerRank.</p>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      )}

      {/* Learn from Mentors Section */}
      <div className="card mb-8 mt-8 animate-slide-up">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen size={24} className="text-accent" />
          <h2 className="text-2xl font-bold">Learn from Mentors</h2>
          <span className="ml-auto text-xs bg-accent/20 text-accent px-3 py-1 rounded-full">Top 5 Experts</span>
        </div>
        <p className="text-gray-400 text-sm mb-6">
          Connect with industry experts. Schedule meetings, ask questions via chat, or learn from their YouTube resources.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {topMentors.map((mentor, idx) => (
            <div 
              key={mentor.id} 
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-5 rounded-lg border border-gray-700 hover:border-accent/50 transition hover:shadow-lg hover:shadow-accent/10"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-accent to-purple-600 flex items-center justify-center font-bold text-white text-sm">
                  {mentor.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex items-center gap-1 bg-yellow-500/20 px-2 py-1 rounded">
                  <Star size={12} className="text-yellow-500 fill-yellow-500" />
                  <span className="text-xs font-bold text-yellow-400">{mentor.rating}</span>
                </div>
              </div>

              <h4 className="font-bold text-lg mb-1">{mentor.name}</h4>
              <p className="text-sm text-accent font-semibold mb-2">{mentor.specialization}</p>
              <p className="text-xs text-gray-400 mb-3">{mentor.bio}</p>

              <div className="space-y-2 mb-4 py-3 border-t border-b border-gray-700">
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
                      <button onClick={() => openChatWith(mentor, `Hi ${mentor.name}, I'd like to ask about ${mentor.specialization}`)} className="flex items-center justify-center gap-1 px-3 py-2 bg-green-600/20 hover:bg-green-600/30 text-green-400 rounded text-xs font-medium transition border border-green-600/30">
                        <MessageCircle size={14} />
                        Chat
                      </button>
                      <button onClick={() => openMeetWith(mentor)} className="flex items-center justify-center gap-1 px-3 py-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 rounded text-xs font-medium transition border border-blue-600/30">
                        <Video size={14} />
                        Meet
                      </button>
                      <a
                        href={`https://www.youtube.com/results?search_query=${mentor.name}+${mentor.specialization}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1 px-3 py-2 bg-red-600/20 hover:bg-red-600/30 text-red-400 rounded text-xs font-medium transition border border-red-600/30 col-span-2"
                      >
                        📺 Learn on YouTube
                      </a>
                    </div>
            </div>
          ))}
        </div>
      </div>

      {/* Learn from Your Peers Section */}
      <div className="card mb-8 animate-slide-up">
        <div className="flex items-center gap-2 mb-4">
          <Users size={24} className="text-accent" />
          <h2 className="text-2xl font-bold">Learn from Your Peers</h2>
          <span className="ml-auto text-xs bg-green-500/20 text-green-400 px-3 py-1 rounded-full flex items-center gap-1">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span> 8 Available
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {topPeers.slice(0, 4).map((peer) => (
            <div key={peer.id} className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-lg border border-gray-700 hover:border-green-500/50 transition">
              <div className="flex items-start justify-between mb-2">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center font-bold text-white text-sm">
                  {peer.avatar}
                </div>
                <div className="flex items-center gap-1 bg-yellow-500/20 px-1.5 py-0.5 rounded text-xs">
                  <Star size={10} className="text-yellow-500 fill-yellow-500" />
                  <span className="font-bold text-yellow-400">{peer.rating}</span>
                </div>
              </div>
              <h4 className="font-bold text-sm mb-0.5">{peer.name}</h4>
              <p className="text-xs text-green-400 font-semibold mb-2">{peer.collegeBadge}</p>
              <div className="flex gap-1.5">
                <button onClick={() => openChatWith(peer, `Hi ${peer.name}, can we discuss this problem?`)} className="flex-1 flex items-center justify-center gap-0.5 px-2 py-1.5 bg-green-600/20 hover:bg-green-600/30 text-green-400 rounded text-xs font-medium transition border border-green-600/30">
                  <MessageCircle size={12} />
                  Chat
                </button>
                <button onClick={() => openMeetWith(peer)} className="flex-1 flex items-center justify-center gap-0.5 px-2 py-1.5 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 rounded text-xs font-medium transition border border-blue-600/30">
                  <Video size={12} />
                  Meet
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
