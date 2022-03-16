import { Typos } from 'components/Typo';
import { format, parse } from 'date-fns';
import Image from 'next/image';
import React from 'react';
import { CATEGORY, STYLES } from 'services/constants';
import { Article } from 'services/types';
import styled from 'styled-components';
import { SpaceX } from 'styles/theme';

type Props = Omit<Article, 'slug' | 'title' | 'content' | 'description'>;

const ArticleAside = ({ category, date }: Props): JSX.Element => {
  return (
    <Wrapper>
      <StickyWrapper>
        <ImageWrapper category={category as keyof typeof CATEGORY}>
          <Image src={`/assets/badge/${category.toLowerCase()}.svg`} layout="fill" alt="category__badge" />
        </ImageWrapper>

        <DlContainer>
          <DescriptionWrapper>
            <dt>작성 날짜</dt>
            <dd>{date}</dd>
          </DescriptionWrapper>
          <DescriptionWrapper>
            <dt>읽는 데</dt>
            <dd>10분 정도 소요됩니다 :)</dd>
          </DescriptionWrapper>
        </DlContainer>
      </StickyWrapper>
    </Wrapper>
  );
};

export default ArticleAside;

const Wrapper = styled.aside`
  margin-bottom: ${({ theme }) => theme.padding._16};
  margin-right: ${({ theme }) => theme.padding._10};

  ${({ theme }) => theme.responsive.xl} {
    margin-bottom: 0px;
  }
`;

const StickyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: sticky;
  top: 82px;
  padding-top: ${({ theme }) => theme.padding._4};
  padding-bottom: ${({ theme }) => theme.padding._8};

  border-bottom: 1px solid ${STYLES.color.greyscale50};

  ${({ theme }) => theme.responsive.md} {
    top: 92px;
  }

  ${({ theme }) => theme.responsive.xl} {
    border-bottom: 0px;
    border-left: 1px solid ${STYLES.color.greyscale50};

    padding-left: ${({ theme }) => theme.padding._4};
    padding-bottom: ${({ theme }) => theme.padding._4};

    flex-direction: column;
  } ;
`;

const ImageWrapper = styled.div<{ category: keyof typeof CATEGORY }>`
  margin: ${({ theme }) => theme.margin._4} ${({ theme }) => theme.margin._8} 0 0;
  position: relative;
  width: 60px;
  height: 60px;

  img {
    max-width: 100%;
    object-fit: contain;
    filter: ${({ category }) => STYLES.iconFilter[category]};
  }
`;

const DlContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  ${({ theme }) => theme.responsive.xl} {
    flex-direction: column;
  } ;
`;

const DescriptionWrapper = styled.dl`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: ${({ theme }) => theme.margin._4} ${({ theme }) => theme.margin._8} 0 0;

  dt {
    ${Typos.Heading6Style};
    font-weight: 600;
    margin: 0;
  }

  dd {
    color: ${STYLES.color.greyscale700};
    ${Typos.Body1Style};
    margin: 0;
  }
`;
