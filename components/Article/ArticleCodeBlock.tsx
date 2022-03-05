import React from 'react';
import { SyntaxHighlighterProps, Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const ArticleCodeBlock = ({ className, ...props }: SyntaxHighlighterProps): JSX.Element => {
  const match = /language-(\w+)/.exec(className || '');
  return match ? (
    <SyntaxHighlighter language={match[1]} PreTag="div" style={dracula} {...props} />
  ) : (
    <code className={className} {...props} />
  );
};

export default ArticleCodeBlock;
