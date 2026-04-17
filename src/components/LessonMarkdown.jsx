import React from 'react'

function simpleMarkdownToHtml(md){
  // Minimal conversion for headings and code fences for demo purposes
  return md
    .replace(/```([a-z]*)\n([\s\S]*?)```/g, (m, lang, code)=>`<pre class="code-block"><code>${escapeHtml(code)}</code></pre>`)
    .replace(/^# (.*$)/gim, '<h1 class="text-2xl font-semibold mb-2">$1</h1>')
    .replace(/^## (.*$)/gim, '<h2 class="text-xl font-medium mb-1">$1</h2>')
    .replace(/\n\n/g, '<p class="mb-2">')
}

function escapeHtml(unsafe){
  return unsafe.replace(/[&<>]/g, (c)=>({ '&':'&amp;','<':'&lt;','>':'&gt;' }[c]))
}

export default function LessonMarkdown({ lesson }){
  if(!lesson) return <div className="card">No lesson selected.</div>

  return (
    <article className="card">
      <div dangerouslySetInnerHTML={{ __html: simpleMarkdownToHtml(lesson.markdown) }} />
    </article>
  )
}
