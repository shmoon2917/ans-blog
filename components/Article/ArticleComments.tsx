import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const ArticleComments = (): JSX.Element => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const copiedRef = wrapperRef.current;

    const utterances = document.createElement('script');
    const utterancesConfig = {
      src: 'https://utteranc.es/client.js',
      repo: 'shmoon2917/semicolon-articles',
      'issue-term': 'pathname',
      theme: 'github-light',
      crossorigin: 'anonymous',
      async: 'true',
    };

    Object.entries(utterancesConfig).map(([key, value]) => utterances.setAttribute(key, value));

    copiedRef?.appendChild(utterances);

    return () => {
      if (copiedRef?.hasChildNodes()) copiedRef.childNodes.forEach((child) => copiedRef.removeChild(child));
    };
  }, []);

  return <div className="article-comments" ref={wrapperRef} />;
};

export default ArticleComments;

const Wrapper = styled.div`
  .utterances {
    max-width: 100%;
  }
`;
