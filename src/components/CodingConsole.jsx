import React, { useState } from 'react'
import { Play, Send, RotateCcw, BookOpen, MessageCircle, Video } from 'lucide-react'

export default function CodingConsole({ question, language }) {
  const [code, setCode] = useState(getDefaultCode(language))
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [isRunning, setIsRunning] = useState(false)
  const [showWrongAnswer, setShowWrongAnswer] = useState(false)

  function getDefaultCode(lang) {
    const templates = {
      java: `public class Solution {
    public static void main(String[] args) {
        // Write your code here
        System.out.println("Hello World");
    }
}`,
      python: `# Write your solution here
def solve():
    # Your code
    print("Hello World")

solve()`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

int main() {
    // Your code here
    cout << "Hello World" << endl;
    return 0;
}`,
      c: `#include <stdio.h>

int main() {
    // Your code here
    printf("Hello World\\n");
    return 0;
}`,
      javascript: `// Write your solution here
function solve() {
    // Your code
    console.log("Hello World");
}

solve();`,
      sql: `-- Write your SQL query here
SELECT * FROM table_name LIMIT 10;`
    }
    return templates[lang] || templates.java
  }

  const handleRun = () => {
    setIsRunning(true)
    setTimeout(() => {
      setOutput('Output:\n✓ Execution completed successfully\n\nSample Output:\n5\n10\n15')
      setIsRunning(false)
    }, 1500)
  }

  const handleSubmit = () => {
    setShowWrongAnswer(true)
    setTimeout(() => {
      setOutput('Status: Wrong Answer\n\nTest Case Failed:\nExpected: [1,2,3]\nGot: [1,2,4]')
    }, 800)
  }

  const handleReset = () => {
    setCode(getDefaultCode(language))
    setInput('')
    setOutput('')
    setShowWrongAnswer(false)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
      {/* Left - Question & Code Editor */}
      <div className="space-y-4">
        {/* Question */}
        <div className="card">
          <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
            <BookOpen size={20} className="text-accent" />
            {question.title}
          </h3>
          <p className="text-sm text-gray-400 mb-4">{question.category} Problem</p>
          <p className="text-sm text-gray-300 mb-4">
            {question.title === 'Two Sum' && 'Given an array of integers nums and an integer target, return the indices of the two numbers that add up to target.\n\nExample: [2,7,11,15], target=9 → [0,1]'}
            {question.title !== 'Two Sum' && 'Solve this problem by implementing the most efficient solution possible.'}
          </p>
          <div className="flex gap-2">
            <a
              href={`https://www.youtube.com/results?search_query=${encodeURIComponent(question.title)}+solution`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-red-600/20 hover:bg-red-600/30 text-red-400 rounded text-sm font-medium transition border border-red-600/30"
            >
              📺 Need Help?
            </a>
            <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-green-600/20 hover:bg-green-600/30 text-green-400 rounded text-sm font-medium transition border border-green-600/30">
              <MessageCircle size={14} />
              Chat
            </button>
          </div>
        </div>

        {/* Code Editor */}
        <div className="card">
          <h4 className="font-bold mb-2">Code Editor</h4>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-48 bg-gray-800 text-gray-100 font-mono text-sm p-3 rounded border border-gray-700 focus:border-accent outline-none resize-none"
            placeholder="Write your code here..."
          />
        </div>
      </div>

      {/* Right - Console & I/O */}
      <div className="space-y-4">
        {/* Input */}
        <div className="card">
          <h4 className="font-bold mb-2">Input</h4>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full h-20 bg-gray-800 text-gray-100 font-mono text-sm p-3 rounded border border-gray-700 focus:border-accent outline-none resize-none"
            placeholder="Enter input here..."
          />
        </div>

        {/* Output/Console */}
        <div className="card">
          <h4 className="font-bold mb-2">Console Output</h4>
          <div className="w-full h-32 bg-gray-950 text-gray-100 font-mono text-sm p-3 rounded border border-gray-700 overflow-y-auto">
            {output || <span className="text-gray-500">Run your code to see output...</span>}
            {showWrongAnswer && <span className="text-red-400"> ❌</span>}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={handleRun}
            disabled={isRunning}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 text-white rounded font-medium transition"
          >
            <Play size={16} />
            Run
          </button>
          <button
            onClick={handleSubmit}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-accent hover:bg-accent/90 text-white rounded font-medium transition"
          >
            <Send size={16} />
            Submit
          </button>
          <button
            onClick={handleReset}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-100 rounded font-medium transition"
          >
            <RotateCcw size={16} />
            Reset
          </button>
        </div>

        {/* Wrong Answer Guide */}
        {showWrongAnswer && (
          <div className="card border-2 border-red-600/30 bg-red-900/10">
            <h4 className="font-bold text-red-400 mb-2">💡 Get Help</h4>
            <p className="text-sm text-gray-300 mb-3">
              Your answer is incorrect. Try these approaches:
            </p>
            <ul className="text-xs text-gray-400 space-y-1 mb-3">
              <li>• Check if you're handling edge cases</li>
              <li>• Review the problem constraints</li>
              <li>• Debug with print statements</li>
              <li>• Watch a solution video on YouTube</li>
            </ul>
            <a
              href={`https://www.youtube.com/results?search_query=${encodeURIComponent(question.title)}+solution+explained`}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center px-3 py-2 bg-red-600/30 hover:bg-red-600/40 text-red-400 rounded text-sm font-medium transition border border-red-600/30"
            >
              📺 Find Solutions on YouTube
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
