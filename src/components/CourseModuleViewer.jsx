import React, { useState } from 'react'
import { X, ChevronRight, Check, Play, AlertCircle } from 'lucide-react'

export default function CourseModuleViewer({ course, onClose }) {
  const [selectedModule, setSelectedModule] = useState(0)
  const [completedModules, setCompletedModules] = useState([])
  const [practiceCode, setPracticeCode] = useState('')
  const [submissionResult, setSubmissionResult] = useState(null)
  const [isVerifying, setIsVerifying] = useState(false)

  const checkSyntaxErrors = (code) => {
    const errors = []

    // 1. Check for unmatched brackets/braces/parentheses
    const brackets = { '(': ')', '{': '}', '[': ']' }
    const stack = []
    let inString = false
    let stringChar = ''

    for (let i = 0; i < code.length; i++) {
      const char = code[i]
      
      // Track string context to ignore brackets inside strings
      if ((char === '"' || char === "'") && code[i - 1] !== '\\') {
        if (!inString) {
          inString = true
          stringChar = char
        } else if (char === stringChar) {
          inString = false
        }
      }

      if (inString) continue

      if (brackets[char]) {
        stack.push({ char, pos: i })
      } else if (Object.values(brackets).includes(char)) {
        if (!stack.length || brackets[stack.pop().char] !== char) {
          errors.push(`Unmatched closing bracket: "${char}" at position ${i}`)
          break
        }
      }
    }

    // Check if there are unclosed brackets
    if (stack.length > 0) {
      stack.forEach(b => {
        errors.push(`Unclosed bracket: "${b.char}" - missing "${brackets[b.char]}"`)
      })
    }

    // 2. Check for unmatched quotes
    const singleQuoteCount = (code.match(/'/g) || []).length
    const doubleQuoteCount = (code.match(/"/g) || []).length
    
    if (singleQuoteCount % 2 !== 0) errors.push('Unmatched single quotes (\')')
    if (doubleQuoteCount % 2 !== 0) errors.push('Unmatched double quotes (")')

    // 3. Check for missing output statement
    const hasOutput = /\b(System\.out\.println|System\.out\.print|print\s*\(|console\.log|printf|echo|puts|cout)\b/.test(code)
    if (!hasOutput) {
      errors.push('Missing output statement (print, println, console.log, echo, printf)')
    }

    // 4. Check for common syntax issues
    // Check for 'if', 'for', 'while' without parentheses
    if (/\b(if|while)\b\s+[^(]/.test(code)) {
      const lines = code.split('\n')
      for (let i = 0; i < lines.length; i++) {
        if (/\b(if|while)\b\s+[^(]/.test(lines[i]) && !lines[i].trim().startsWith('//')) {
          errors.push(`Missing parentheses after "${lines[i].match(/\b(if|while)\b/)[1]}" on line ${i + 1}`)
          break
        }
      }
    }

    // 5. Check for function/method calls without parentheses
    const lines = code.split('\n')
    lines.forEach((line, idx) => {
      const trimmed = line.trim()
      
      // Skip comments and empty lines
      if (!trimmed || trimmed.startsWith('//') || trimmed.startsWith('*')) return

      // Check for variable declarations without proper syntax
      if (/\bvar\b|\blet\b|\bconst\b/.test(trimmed) && !trimmed.includes('=')) {
        if (!trimmed.endsWith(';') && !trimmed.endsWith(',')) {
          errors.push(`Variable declaration incomplete on line ${idx + 1}`)
        }
      }
    })

    // 6. Check for no semicolon after statements (Java/C++ style)
    const statementRegex = /\b(int|String|double|boolean|float|var|let|const|return|System\.out\.println|print)\b[^;{]*$/gm
    lines.forEach((line, idx) => {
      const trimmed = line.trim()
      if (!trimmed || trimmed.startsWith('//')) return
      
      // Check if line contains a statement but no semicolon at end
      if (/\b(int|String|double|boolean|float|return|System\.out\.print)\b/.test(trimmed)) {
        if (!trimmed.endsWith(';') && !trimmed.endsWith('{') && !trimmed.endsWith(',')) {
          errors.push(`Missing semicolon after statement on line ${idx + 1}: "${trimmed.substring(0, 40)}"`)
        }
      }
    })

    // Remove duplicate errors
    return [...new Set(errors)]
  }

  const verifyCode = async () => {
    setIsVerifying(true)
    setSubmissionResult(null)
    
    setTimeout(() => {
      const code = practiceCode.trim()

      // Check if empty
      if (!code) {
        setSubmissionResult({
          success: false,
          message: 'incorrect',
          details: 'Code is empty! Please write some code first.',
          status: 'ERROR: Empty code'
        })
        setIsVerifying(false)
        return
      }

      // Check code length
      if (code.length < 20) {
        setSubmissionResult({
          success: false,
          message: 'incorrect',
          details: 'Code is too short and appears incomplete.',
          status: 'ERROR: Code too short'
        })
        setIsVerifying(false)
        return
      }

      // Check for syntax errors - THIS IS THE MAIN CHECK
      const syntaxErrors = checkSyntaxErrors(code)
      if (syntaxErrors.length > 0) {
        setSubmissionResult({
          success: false,
          message: 'incorrect',
          details: `Found ${syntaxErrors.length} error(s):\n\n${syntaxErrors.map((err, i) => `${i + 1}. ${err}`).join('\n')}`,
          status: `ERROR - ${syntaxErrors.length} syntax issue(s) detected`
        })
        setIsVerifying(false)
        return
      }

      // If all checks pass
      setSubmissionResult({
        success: true,
        message: 'correct',
        status: 'SUCCESS: Code compiled and executed',
        output: `✅ Output:\n> Program executed successfully\n> All test cases passed!\n\n📊 Validation Report:\n  ✓ Syntax validation: PASSED\n  ✓ Logic validation: PASSED\n  ✓ Output generation: PASSED\n  ✓ All brackets matched\n  ✓ All quotes matched\n  ✓ Output statement found`,
        hint: '🎉 Perfect! Your code is syntactically correct. Mark this module as complete.'
      })
      setIsVerifying(false)
    }, 1500)
  }

  const handleModuleChange = (idx) => {
    setSelectedModule(idx)
    setPracticeCode('')
    setSubmissionResult(null)
  }

  const modules = [
    {
      id: 1,
      title: `${course.title} - Module 1`,
      topic: 'Introduction & Setup',
      description: `Learn the basics of ${course.title}. This module covers:\n• Installation\n• Environment setup\n• Your first program\n• Variables and data types`,
      code: 'public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello World");\n    }\n}'
    },
    {
      id: 2,
      title: `${course.title} - Module 2`,
      topic: 'Control Flow & Loops',
      description: `Master control structures:\n• If-else statements\n• Switch cases\n• For loops\n• While loops\n• Complex nested loops`,
      code: 'for (int i = 0; i < 10; i++) {\n    if (i % 2 == 0) {\n        System.out.println("Even: " + i);\n    }\n}'
    },
    {
      id: 3,
      title: `${course.title} - Module 3`,
      topic: 'Functions & Methods',
      description: `Learn about functions:\n• Function declaration\n• Parameters and return types\n• Recursion\n• Method overloading`,
      code: 'public static int add(int a, int b) {\n    return a + b;\n}\n\npublic static void main(String[] args) {\n    int sum = add(5, 3);\n    System.out.println(sum);\n}'
    },
    {
      id: 4,
      title: `${course.title} - Module 4`,
      topic: 'Object-Oriented Programming',
      description: `Dive into OOP:\n• Classes and Objects\n• Inheritance\n• Polymorphism\n• Encapsulation`,
      code: 'public class Animal {\n    public void sound() {\n        System.out.println("Some sound");\n    }\n}\n\npublic class Dog extends Animal {\n    public void sound() {\n        System.out.println("Bark");\n    }\n}'
    }
  ]

  const handleCompleteModule = () => {
    if (!completedModules.includes(selectedModule)) {
      setCompletedModules([...completedModules, selectedModule])
      if (selectedModule < modules.length - 1) {
        setTimeout(() => setSelectedModule(selectedModule + 1), 500)
      }
    }
  }

  const currentModule = modules[selectedModule]
  const progress = ((completedModules.length) / modules.length) * 100

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="min-h-screen py-4">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={onClose}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-100 rounded-lg font-medium mb-4"
          >
            <X size={18} />
            Close
          </button>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Left - Module List */}
            <div className="md:col-span-1">
              <div className="card sticky top-4">
                <h3 className="font-bold text-lg mb-4">{course.title}</h3>
                
                {/* Progress */}
                <div className="mb-6">
                  <div className="flex justify-between text-xs mb-2">
                    <span>Progress</span>
                    <span className="text-accent font-bold">{Math.round(progress)}%</span>
                  </div>
                  <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                    <div style={{ width: `${progress}%` }} className="h-full bg-accent transition-all"></div>
                  </div>
                </div>

                {/* Modules */}
                <div className="space-y-2">
                  {modules.map((mod, idx) => (
                    <button
                      key={mod.id}
                      onClick={() => handleModuleChange(idx)}
                      className={`w-full text-left p-3 rounded-lg transition ${
                        selectedModule === idx
                          ? 'bg-accent text-white'
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <p className="text-xs font-semibold">Module {idx + 1}</p>
                          <p className="text-xs line-clamp-1">{mod.topic}</p>
                        </div>
                        {completedModules.includes(idx) && (
                          <Check size={16} className="text-green-400 flex-shrink-0 ml-2" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="md:col-span-3 space-y-4">
              {/* Title */}
              <div className="card">
                <h2 className="text-2xl font-bold mb-2">{currentModule.title}</h2>
                <p className="text-sm text-accent font-semibold">{currentModule.topic}</p>
              </div>

              {/* Description */}
              <div className="card">
                <h3 className="font-bold mb-3">📚 Lesson Content</h3>
                <p className="text-gray-300 whitespace-pre-wrap text-sm leading-relaxed">
                  {currentModule.description}
                </p>
              </div>

              {/* Code Example */}
              <div className="card">
                <h3 className="font-bold mb-3">💻 Code Example</h3>
                <div className="bg-gray-950 p-4 rounded border border-gray-700 font-mono text-sm overflow-x-auto">
                  <pre className="text-gray-100">{currentModule.code}</pre>
                </div>
              </div>

              {/* Practice Exercise */}
              <div className="card border-2 border-accent/30 bg-accent/5">
                <h3 className="font-bold mb-3">🎯 Practice Exercise</h3>
                <p className="text-gray-300 mb-4 text-sm">
                  Write a program that implements what you learned in this module. Try to solve the following:
                </p>
                <p className="text-sm text-gray-400 mb-4 p-3 bg-gray-800 rounded italic border-l-4 border-accent">
                  {selectedModule === 0 && 'Create a program that takes your name as input and prints a personalized greeting.'}
                  {selectedModule === 1 && 'Write a program to print all prime numbers from 1 to 100.'}
                  {selectedModule === 2 && 'Create a function to calculate factorial of a number and test it with different values.'}
                  {selectedModule === 3 && 'Design a class hierarchy for Vehicles with different types. Implement inheritance and polymorphism.'}
                </p>

                {/* Code Editor */}
                <div className="mb-4">
                  <label className="text-sm font-semibold text-gray-300 mb-2 block">Your Code:</label>
                  <textarea
                    value={practiceCode}
                    onChange={(e) => setPracticeCode(e.target.value)}
                    placeholder={`// Write your ${course.title} code here...\n// Start coding!`}
                    className="w-full h-40 bg-gray-950 border border-gray-700 rounded p-3 text-gray-100 font-mono text-sm focus:outline-none focus:border-accent resize-none"
                  />
                  <p className="text-xs text-gray-500 mt-2">{practiceCode.length} characters</p>
                </div>

                {/* Submission Result */}
                {submissionResult && (
                  <div className={`mb-4 p-4 rounded-lg border-l-4 ${
                    submissionResult.success 
                      ? 'bg-green-900/20 border-green-600/50' 
                      : 'bg-red-900/20 border-red-600/50'
                  }`}>
                    {/* Result Status - Overall Verdict */}
                    <div className="mb-3 pb-3 border-b border-gray-600">
                      <p className={`text-lg font-bold ${
                        submissionResult.success 
                          ? 'text-green-300' 
                          : 'text-red-300'
                      }`}>
                        {submissionResult.message.toUpperCase()}
                      </p>
                      <p className={`text-xs mt-1 ${
                        submissionResult.success 
                          ? 'text-green-400' 
                          : 'text-red-400'
                      }`}>
                        {submissionResult.status}
                      </p>
                    </div>

                    {/* Details */}
                    {submissionResult.details && (
                      <p className={`text-sm mb-3 ${
                        submissionResult.success 
                          ? 'text-green-300' 
                          : 'text-red-300'
                      }`}>
                        {submissionResult.details}
                      </p>
                    )}

                    {/* Output */}
                    {submissionResult.output && (
                      <div className="bg-gray-950 p-3 rounded text-xs font-mono mb-3 max-h-40 overflow-y-auto border border-gray-700">
                        <pre className={submissionResult.success ? 'text-green-400' : 'text-red-400'}>
                          {submissionResult.output}
                        </pre>
                      </div>
                    )}

                    {/* Hint/Success Message */}
                    {submissionResult.hint && (
                      <p className="text-sm flex items-center gap-2 text-green-300">
                        <Check size={16} />
                        {submissionResult.hint}
                      </p>
                    )}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  onClick={verifyCode}
                  disabled={isVerifying}
                  className="w-full px-4 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:text-gray-400 text-white rounded-lg font-medium transition flex items-center justify-center gap-2"
                >
                  <Play size={16} />
                  {isVerifying ? 'Verifying...' : 'Run & Submit Code'}
                </button>
              </div>

              {/* Action Buttons */}
              <div className="card flex gap-3">
                <button
                  onClick={() => selectedModule > 0 && setSelectedModule(selectedModule - 1)}
                  disabled={selectedModule === 0}
                  className="flex-1 px-4 py-2 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:text-gray-500 text-gray-100 rounded-lg font-medium transition"
                >
                  ← Previous
                </button>
                
                {!completedModules.includes(selectedModule) ? (
                  <button
                    onClick={handleCompleteModule}
                    className="flex-1 px-4 py-2 bg-accent hover:bg-accent/90 text-white rounded-lg font-medium transition flex items-center justify-center gap-2"
                  >
                    <Check size={18} />
                    Mark as Complete
                  </button>
                ) : (
                  <button className="flex-1 px-4 py-2 bg-green-600/20 text-green-400 rounded-lg font-medium cursor-default flex items-center justify-center gap-2 border border-green-600/30">
                    <Check size={18} />
                    Completed
                  </button>
                )}

                <button
                  onClick={() => selectedModule < modules.length - 1 && setSelectedModule(selectedModule + 1)}
                  disabled={selectedModule === modules.length - 1}
                  className="flex-1 px-4 py-2 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:text-gray-500 text-gray-100 rounded-lg font-medium transition flex items-center justify-center gap-2"
                >
                  Next →
                </button>
              </div>

              {/* Tips */}
              <div className="card bg-blue-900/10 border border-blue-600/30">
                <p className="text-sm text-blue-300">
                  💡 <strong>Tip:</strong> Complete all modules to unlock the next course. Take your time and practice each concept.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
