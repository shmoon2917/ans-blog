import { SpecialArticleWrapper } from 'components/Article/SpecialArticle.styles';
import SpecialArticleImage from 'components/Article/SpecialArticleImage';
import SpecialArticleTitle from 'components/Article/SpecialArticleTitle';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { STYLES } from 'services/constants';
import styled, { css } from 'styled-components';
import { SpaceX } from 'styles/mixin';
import SpecialArticle from '../components/Article/SpecialArticle';

export default function SpecialArticles() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrolledLeft, setScrolledLeft] = useState(false);
  const [scrolledRight, setScrolledRight] = useState(false);

  const onScroll = useCallback((event: React.UIEvent<HTMLDivElement>) => {
    const scrollLeft = event.currentTarget.scrollLeft;
    const scrollWidth = event.currentTarget.scrollWidth;
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

    if (scrollWidth <= vw) {
      return;
    }

    if (scrollLeft === 0) {
      setScrolledLeft(false);
    }

    if (scrollLeft + vw === scrollWidth) {
      setScrolledRight(false);
    } else if (scrollLeft > 0) {
      setScrolledLeft(true);
      setScrolledRight(true);
    }
  }, []);

  useEffect(() => {
    if (scrollRef.current?.scrollWidth) {
      const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
      if (scrollRef.current.scrollWidth > vw) {
        setScrolledRight(true);
      }
    }
  }, [scrollRef]);

  return (
    <SpecialArticlesContainer>
      <ScrollArea ref={scrollRef} onScroll={onScroll}>
        <SpecialArticle>
          <SpecialArticleImage src="/assets/example.png" alt="토스" />
          <SpecialArticleTitle>예시</SpecialArticleTitle>
        </SpecialArticle>
        <SpecialArticle>
          <SpecialArticleImage src="/assets/example.png" alt="토스" />
          <SpecialArticleTitle>예시</SpecialArticleTitle>
        </SpecialArticle>
        <SpecialArticle>
          <SpecialArticleImage src="/assets/example.png" alt="토스" />
          <SpecialArticleTitle>예시</SpecialArticleTitle>
        </SpecialArticle>
        <SpecialArticle>
          <SpecialArticleImage src="/assets/example.png" alt="토스" />
          <SpecialArticleTitle>예시</SpecialArticleTitle>
        </SpecialArticle>
        <SpecialArticle>
          <SpecialArticleImage src="/assets/example.png" alt="토스" />
          <SpecialArticleTitle>예시</SpecialArticleTitle>
        </SpecialArticle>
        <SpecialArticle>
          <SpecialArticleImage src="/assets/example.png" alt="토스" />
          <SpecialArticleTitle>예시</SpecialArticleTitle>
        </SpecialArticle>
      </ScrollArea>
      <ScrollShadow type="left" hidden={!scrolledLeft} />
      <ScrollShadow type="right" hidden={!scrolledRight} />
    </SpecialArticlesContainer>
  );
}

const SpecialArticlesContainer = styled.section`
  position: relative;
`;

const ScrollArea = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  overflow: scroll;
  box-sizing: border-box;

  @media (max-width: 1140px) {
    justify-content: flex-start;
  }

  width: 100%;
  padding: 12px ${STYLES.paddings.default}px ${STYLES.paddings.default}px;

  /** Safari Scroll Padding Issue */
  a:last-child > ${SpecialArticleWrapper} {
    margin-right: ${STYLES.paddings.default}px;
  }

  ${SpaceX(20)}

  ${STYLES.media.mobile} {
    padding: 12px ${STYLES.paddings.mobile}px ${STYLES.paddings.mobile}px;

    a:last-child > ${SpecialArticleWrapper} {
      margin-right: ${STYLES.paddings.mobile}px;
    }
  }

  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ScrollShadow = styled.div<{ type: 'left' | 'right'; hidden: boolean }>`
  position: absolute;
  top: 0;
  bottom: 0;

  width: 50px;

  pointer-events: none;
  transition: opacity cubic-bezier(0.4, 0, 0.2, 1) 200ms;

  ${({ type }) =>
    type === 'right'
      ? css`
          right: 0px;
          background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%);
        `
      : css`
          left: 0px;
          background: linear-gradient(-90deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%);
        `}

  ${({ hidden }) =>
    hidden &&
    css`
      opacity: 0;
    `}
`;
