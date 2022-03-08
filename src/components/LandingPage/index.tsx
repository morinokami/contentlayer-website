import React from 'react'
import { Header } from '../Header'
import { Hero } from './Hero'
import { Support } from './Support'
import { CodeSnippets } from './HowItWorks'
import { Playground } from './Playground'

export const LandingPage: React.FC<{ codeSnippetsHtml: CodeSnippets; usedByCount: number }> = ({
  codeSnippetsHtml,
  usedByCount,
}) => {
  return (
    <div>
      <Header />
      <div className="h-full pt-[57px]">
        <Hero />
        <Support />
        <div>Used by {usedByCount}</div>
        <div dangerouslySetInnerHTML={{ __html: codeSnippetsHtml.step1['contentlayer.config.ts'] }} />
        <div dangerouslySetInnerHTML={{ __html: codeSnippetsHtml.step3['pages/posts/[slug].tsx'] }} />
        <div className="max-w-xl" style={{ fontSize: 13 }}>
          <div dangerouslySetInnerHTML={{ __html: codeSnippetsHtml.step1['contentlayer.config.ts'] }} />
          <div dangerouslySetInnerHTML={{ __html: codeSnippetsHtml.step3['pages/posts/[slug].tsx'] }} />
        </div>
        <Playground />
      </div>
    </div>
  )
}
