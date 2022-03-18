import React, { useCallback, useContext, useEffect, useReducer, useRef, useState } from 'react';
import styled from 'styled-components';

import { Typos } from 'components/Typo';

import { STYLES } from 'services/constants';
import { useIntersectionObserver } from 'services/hooks';
import { Article } from 'services/types';
import { TitleIntersectCtx } from 'services/contexts';

type ArticleHeaderProps = Omit<Article, 'slug' | 'content'>;

function intersectionReducer(state: boolean, action: { type: 'INTERSECT' | 'INIT' }) {
  switch (action.type) {
    case 'INTERSECT':
      return true;
    case 'INIT':
      return false;
    default:
      return state;
  }
}

const ArticleHeader = ({ title }: ArticleHeaderProps): JSX.Element => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const { setTitle } = useContext(TitleIntersectCtx);
  const [wasIntersected, dispatch] = useReducer(intersectionReducer, false);

  // const observer = new IntersectionObserver(
  //   ([{ isIntersecting }]) => {
  //     if (isIntersecting) {
  //       console.log('현재 교차');
  //       dispatch({ type: 'INTERSECT' });
  //       setTitle('');
  //     } else if (wasIntersected) {
  //       console.log('교차 끝');
  //       dispatch({ type: 'INIT' });
  //       setTitle?.(title);
  //     }
  //   },
  //   {
  //     root: null,
  //     rootMargin: '0px',
  //     threshold: 1.0,
  //   },
  // );

  return (
    <Wrapper>
      <Title ref={titleRef}>{title}</Title>
    </Wrapper>
  );
};

export default ArticleHeader;

const Wrapper = styled.div`
  margin-top: ${({ theme }) => theme.margin._16};
  padding-bottom: ${({ theme }) => theme.padding._4};

  ${({ theme }) => theme.responsive.md} {
    margin-right: ${({ theme }) => theme.margin._8};
  }

  ${({ theme }) => theme.responsive.xl} {
    padding-bottom: ${({ theme }) => theme.padding._0};
    margin-bottom: ${({ theme }) => theme.margin._8};
    grid-column: 1 / span 3;
  }
`;

const Title = styled(Typos.Heading1)`
  color: ${STYLES.color.greyscale950};
  letter-spacing: -0.025em;
  font-weight: 800;

  ${({ theme }) => theme.responsive.xl} {
    line-height: 1.25;
    font-size: 3rem;
  }
`;
