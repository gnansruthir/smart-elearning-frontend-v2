import React, { useState } from 'react'
import { courses } from '../data'
import { trendingJobs, roleTeamMembers } from '../data/expanded'
import LearningPath from '../components/LearningPath'
import { Briefcase, Star, ExternalLink, MapPin, MessageCircle, Video, Linkedin, Mail, ChevronRight, X, Copy, Check } from 'lucide-react'

export default function RoadmapAdvanced() {
  const [selectedJob, setSelectedJob] = useState(null)
  const [expandedRoadmap, setExpandedRoadmap] = useState(null)
  const [selectedTeamMember, setSelectedTeamMember] = useState(null)
  const [showChatModal, setShowChatModal] = useState(false)
  const [showMeetModal, setShowMeetModal] = useState(false)
  const [meetLinkCopied, setMeetLinkCopied] = useState(false)
  const [chatMessage, setChatMessage] = useState('')

  const generateMeetLink = (member) => {
    const meetId = member.id + '-' + Date.now()
    return `https://meet.google.com/${meetId.replace(/\s+/g, '-').toLowerCase()}`
  }

  const handleCopyMeetLink = (link) => {
    navigator.clipboard.writeText(link)
    setMeetLinkCopied(true)
    setTimeout(() => setMeetLinkCopied(false), 2000)
  }

  const modules = [
    { id: 'java-basics', title: 'Java Basics', level: 'Beginner' },
    { id: 'java-oop', title: 'OOP in Java', level: 'Intermediate' },
    { id: 'java-collections', title: 'Collections & Streams', level: 'Intermediate' },
    { id: 'python-fundamentals', title: 'Python Fundamentals', level: 'Beginner' },
    { id: 'cpp-programming', title: 'C++ Programming', level: 'Intermediate' },
    { id: 'sql-foundations', title: 'SQL Foundations', level: 'Beginner' }
  ]

  return (
    <div className="max-w-6xl mx-auto">
      {/* Learning Path */}
      <div className="mb-8 animate-fade-in">
        <h1 className="text-3xl font-bold mb-2">Your Learning Roadmap</h1>
        <p className="text-gray-400 mb-6">Follow the structured path to master programming</p>
        <LearningPath modules={modules} />
      </div>

      {/* Courses Grid */}
      <div className="card mb-8 animate-slide-up">
        <h2 className="text-2xl font-bold mb-4">Available Courses</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {courses.map((c, idx) => (
            <div
              key={c.id}
              className="card interactive-card"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold">{c.title}</h3>
                  <p className="text-sm text-gray-400">{c.level}</p>
                </div>
                <span className="text-sm text-accent font-bold">{c.progress}%</span>
              </div>
              <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                <div style={{ width: `${c.progress}%` }} className="h-full bg-accent"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trending Jobs Section */}
      <div className="card animate-slide-up">
        <div className="flex items-center gap-2 mb-6">
          <Briefcase size={24} className="text-accent" />
          <h2 className="text-2xl font-bold">Trending Tech & Non-Tech Jobs</h2>
        </div>
        <p className="text-gray-400 mb-6">
          Explore the most in-demand jobs in 2026 and learn the skills needed to land them.
        </p>

        {/* Job Category Tabs */}
        <div className="flex gap-2 mb-6 flex-wrap">
          <button
            onClick={() => setSelectedJob(null)}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              selectedJob === null
                ? 'bg-accent text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            All Jobs
          </button>
          {['Tech', 'Non-Tech'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedJob(cat)}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                selectedJob === cat
                  ? 'bg-accent text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {cat} Roles
            </button>
          ))}
        </div>

        {/* Jobs Grid */}
        <div className="space-y-4">
          {trendingJobs
            .filter((job) => !selectedJob || job.category === selectedJob)
            .map((job, idx) => (
              <div
                key={job.id}
                className="card border-2 border-gray-700 hover:border-accent/50 transition cursor-pointer group"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-bold group-hover:text-accent transition">{job.title}</h3>
                    <p className="text-sm text-gray-400">
                      {job.category === 'Tech' ? '💻 Tech Role' : '📊 Non-Tech Role'}
                    </p>
                  </div>
                  <div className="text-right">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        job.demand === 'Very High'
                          ? 'bg-red-600/30 text-red-400'
                          : 'bg-orange-600/30 text-orange-400'
                      }`}
                    >
                      {job.demand} Demand
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <p className="text-gray-400">Avg Salary</p>
                    <p className="font-semibold text-green-400">{job.avgSalary}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Required Skills</p>
                    <div className="flex gap-1 flex-wrap mt-1">
                      {job.skills.map((skill) => (
                        <span key={skill} className="px-2 py-0.5 text-xs bg-accent/20 text-accent rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Roadmap Preview */}
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <p className="text-sm font-semibold mb-2">Learning Roadmap:</p>
                  <div className="grid grid-cols-4 gap-2">
                    {job.roadmap.map((step) => (
                      <div
                        key={step.step}
                        className="p-2 bg-gray-700/50 rounded text-xs text-center hover:bg-accent/20 transition"
                      >
                        <div className="font-bold text-accent mb-1">Step {step.step}</div>
                        <div className="text-gray-300 text-xs">{step.name.substring(0, 12)}...</div>
                        <div className="text-gray-500 text-xs mt-1">{step.duration}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => setExpandedRoadmap(job.id)}
                  className="mt-4 w-full px-3 py-2 bg-accent hover:bg-accent/90 text-white font-medium rounded-lg transition text-sm flex items-center justify-center gap-2">
                  View Full Roadmap <ChevronRight size={16} />
                </button>
              </div>
            ))}
        </div>

        {/* Job Market Insights */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card text-center">
            <div className="text-3xl font-bold text-accent mb-2">
              {trendingJobs.filter((j) => j.category === 'Tech').length}
            </div>
            <p className="text-gray-400">Tech Positions Available</p>
          </div>
          <div className="card text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">$120K+</div>
            <p className="text-gray-400">Avg Starting Salary</p>
          </div>
          <div className="card text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">4-6 Months</div>
            <p className="text-gray-400">Avg Time to Master</p>
          </div>
        </div>
      </div>

      {/* Expanded Roadmap Modal */}
      {expandedRoadmap && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 overflow-y-auto p-4">
          <div className="max-w-4xl mx-auto bg-gray-900 rounded-xl border border-gray-700 animate-scale-up my-8">
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-6 border-b border-gray-700 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Complete {trendingJobs.find(j => j.id === expandedRoadmap)?.title} Roadmap</h2>
                <p className="text-sm text-gray-400 mt-2">Full learning path with team mentors from top companies</p>
              </div>
              <button
                onClick={() => {
                  setExpandedRoadmap(null)
                  setSelectedTeamMember(null)
                }}
                className="p-2 hover:bg-gray-800 rounded-lg transition"
              >
                <X size={24} className="text-gray-400" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-8">
              {/* Full Roadmap Steps */}
              <div>
                <h3 className="text-xl font-bold mb-4">Learning Path (12 Weeks)</h3>
                <div className="space-y-3">
                  {trendingJobs.find(j => j.id === expandedRoadmap)?.roadmap.map((step, idx) => (
                    <div
                      key={step.step}
                      className="p-4 bg-gray-800/50 border border-gray-700 rounded-lg hover:border-accent/50 transition"
                      style={{ animationDelay: `${idx * 0.05}s` }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent text-white font-bold">
                            {step.step}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-lg mb-1">{step.name}</h4>
                          <p className="text-sm text-gray-400 mb-2">{step.description}</p>
                          <div className="flex items-center gap-4 text-xs">
                            <span className="bg-purple-600/30 text-purple-400 px-2 py-1 rounded">⏱️ {step.duration}</span>
                            <span className="text-gray-500">📚 Topics: DSA, Design Patterns, Best Practices</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Team Members Section */}
              {roleTeamMembers[expandedRoadmap] && (
                <div>
                  <h3 className="text-xl font-bold mb-4">Top Working Members in India - {trendingJobs.find(j => j.id === expandedRoadmap)?.title}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {roleTeamMembers[expandedRoadmap].map((member, idx) => (
                      <div
                        key={member.id}
                        className="bg-gradient-to-br from-gray-800 to-gray-900 p-5 rounded-lg border border-gray-700 hover:border-accent/50 transition"
                        style={{ animationDelay: `${idx * 0.1}s` }}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-accent to-purple-600 flex items-center justify-center font-bold text-white text-sm">
                                {member.logo}
                              </div>
                              <div>
                                <h4 className="font-bold">{member.name}</h4>
                                <p className="text-xs text-accent">{member.company}</p>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 bg-yellow-500/20 px-2 py-1 rounded">
                            <Star size={12} className="text-yellow-500 fill-yellow-500" />
                            <span className="text-xs font-bold text-yellow-400">{member.rating}</span>
                          </div>
                        </div>

                        <p className="text-sm text-gray-300 mb-3">{member.bio}</p>

                        <div className="space-y-2 mb-4 text-xs">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-500">📍 Location:</span>
                            <span className="text-gray-300">{member.location}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-500">💼 Experience:</span>
                            <span className="text-green-400 font-medium">{member.yearsExperience} years</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-500">⏱️ Available:</span>
                            <span className="text-blue-400 font-medium">{member.availability}</span>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2 pt-3 border-t border-gray-700">
                          <button 
                            onClick={() => {
                              setSelectedTeamMember(member)
                              setShowChatModal(true)
                            }}
                            className="flex items-center justify-center gap-1 px-3 py-2 bg-green-600/20 hover:bg-green-600/30 text-green-400 rounded text-xs font-medium transition border border-green-600/30">
                            <MessageCircle size={12} />
                            Chat
                          </button>
                          <button 
                            onClick={() => {
                              setSelectedTeamMember(member)
                              setShowMeetModal(true)
                            }}
                            className="flex items-center justify-center gap-1 px-3 py-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 rounded text-xs font-medium transition border border-blue-600/30">
                            <Video size={12} />
                            Meet
                          </button>
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-1 px-3 py-2 bg-blue-700/20 hover:bg-blue-700/30 text-blue-300 rounded text-xs font-medium transition border border-blue-700/30"
                          >
                            <Linkedin size={12} />
                            LinkedIn
                          </a>
                          <a
                            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${member.email}&subject=Let's Connect - ${member.role}&body=Hi ${member.name},%0A%0AI'd like to connect with you regarding ${member.role}.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-1 px-3 py-2 bg-red-600/20 hover:bg-red-600/30 text-red-400 rounded text-xs font-medium transition border border-red-600/30 group relative"
                            title={`Email: ${member.email}`}
                          >
                            <Mail size={12} />
                            <span className="hidden group-hover:inline absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-gray-200 rounded text-xs whitespace-nowrap z-10">
                              {member.email}
                            </span>
                            Gmail
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Completion Stats */}
              <div className="grid grid-cols-3 gap-4 p-4 bg-accent/10 border border-accent/20 rounded-lg">
                <div className="text-center">
                  <p className="text-2xl font-bold text-accent mb-1">12</p>
                  <p className="text-xs text-gray-400">Weeks to Complete</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-400 mb-1">50+</p>
                  <p className="text-xs text-gray-400">Projects & Assignments</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-400 mb-1">100%</p>
                  <p className="text-xs text-gray-400">Job Ready Guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Chat Modal */}
      {showChatModal && selectedTeamMember && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-xl border border-gray-700 w-full max-w-lg animate-scale-up">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-6 border-b border-gray-700 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center font-bold text-white">
                  {selectedTeamMember.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="font-bold">{selectedTeamMember.name}</h3>
                  <p className="text-xs text-green-400">● Available now</p>
                </div>
              </div>
              <button
                onClick={() => {
                  setShowChatModal(false)
                  setSelectedTeamMember(null)
                  setChatMessage('')
                }}
                className="p-2 hover:bg-gray-800 rounded-lg transition"
              >
                <X size={20} className="text-gray-400" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="p-6 h-96 overflow-y-auto space-y-4 bg-gray-800/30">
              <div className="flex justify-start">
                <div className="bg-gray-700/50 px-4 py-2 rounded-lg max-w-xs">
                  <p className="text-sm text-gray-200">Hi! How can I help you today? Feel free to ask any questions about {selectedTeamMember.role}.</p>
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-gray-700/50 px-4 py-2 rounded-lg max-w-xs">
                  <p className="text-sm text-gray-200">I'm {selectedTeamMember.yearsExperience} years into my career and would love to share my experience.</p>
                </div>
              </div>
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-gray-700 flex gap-2">
              <input
                type="text"
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-accent"
              />
              <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition">
                Send
              </button>
            </div>

            {/* Chat Footer */}
            <div className="p-4 bg-gray-800/50 border-t border-gray-700 text-xs text-gray-400">
              <p>💡 This is a demo chat. In a real app, messages would be sent to their email at <strong>{selectedTeamMember.email}</strong></p>
            </div>
          </div>
        </div>
      )}

      {/* Google Meet Modal */}
      {showMeetModal && selectedTeamMember && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-xl border border-gray-700 w-full max-w-lg animate-scale-up">
            {/* Meet Header */}
            <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-6 border-b border-gray-700 flex items-center justify-between">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Video size={24} className="text-blue-400" />
                Schedule Google Meet
              </h3>
              <button
                onClick={() => {
                  setShowMeetModal(false)
                  setSelectedTeamMember(null)
                }}
                className="p-2 hover:bg-gray-800 rounded-lg transition"
              >
                <X size={20} className="text-gray-400" />
              </button>
            </div>

            {/* Meet Content */}
            <div className="p-6 space-y-4">
              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                <p className="text-sm text-gray-400 mb-2">With: <strong className="text-white">{selectedTeamMember.name}</strong></p>
                <p className="text-sm text-gray-400 mb-2">Role: <strong className="text-accent">{selectedTeamMember.role}</strong></p>
                <p className="text-sm text-gray-400">Available: <strong className="text-green-400">{selectedTeamMember.availability}</strong></p>
              </div>

              {/* Meet Link */}
              <div>
                <label className="text-sm font-semibold text-gray-300 mb-2 block">Your Meet Link:</label>
                <div className="flex gap-2">
                  <div className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-3 text-sm text-accent break-all">
                    {generateMeetLink(selectedTeamMember)}
                  </div>
                  <button
                    onClick={() => handleCopyMeetLink(generateMeetLink(selectedTeamMember))}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition flex items-center gap-2"
                  >
                    {meetLinkCopied ? <Check size={16} /> : <Copy size={16} />}
                    {meetLinkCopied ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>

              {/* Invite Options */}
              <div>
                <label className="text-sm font-semibold text-gray-300 mb-3 block">Send Invite To:</label>
                <div className="space-y-2">
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${selectedTeamMember.email}&subject=Let's Connect - Google Meet Invitation&body=Hi ${selectedTeamMember.name},%0A%0AI'd like to schedule a Google Meet with you.%0A%0AMeet Link: ${generateMeetLink(selectedTeamMember)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-4 py-2 bg-red-600/20 hover:bg-red-600/30 text-red-400 border border-red-600/30 rounded-lg font-medium transition flex items-center justify-center gap-2"
                  >
                    <Mail size={16} />
                    Send to Gmail ({selectedTeamMember.email})
                  </a>
                  <a
                    href={selectedTeamMember.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-4 py-2 bg-blue-700/20 hover:bg-blue-700/30 text-blue-300 border border-blue-700/30 rounded-lg font-medium transition flex items-center justify-center gap-2"
                  >
                    <Linkedin size={16} />
                    Find on LinkedIn
                  </a>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4 border-t border-gray-700">
                <a
                  href={generateMeetLink(selectedTeamMember)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition flex items-center justify-center gap-2"
                >
                  <Video size={18} />
                  Join Meet Now
                </a>
                <button
                  onClick={() => {
                    setShowMeetModal(false)
                    setSelectedTeamMember(null)
                  }}
                  className="px-4 py-3 bg-gray-700 hover:bg-gray-600 text-gray-200 rounded-lg font-medium transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
