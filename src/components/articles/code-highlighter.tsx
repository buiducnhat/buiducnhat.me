import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark as darkCodeTheme } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

interface CodeHighlighterProps {
  language: string;
  children: React.ReactNode;
}

function CodeHighlighter({ language, children }: CodeHighlighterProps) {
  return (
    <SyntaxHighlighter
      language={language}
      style={darkCodeTheme}
      customStyle={{ background: 'var(--tw-prose-pre-bg)', padding: '1rem' }}
    >
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  );
}

export default CodeHighlighter;
