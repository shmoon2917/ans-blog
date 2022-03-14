import { Typos } from 'components/Typo';
import { format, parse } from 'date-fns';
import Image from 'next/image';
import React from 'react';
import { CATEGORY, STYLES } from 'services/constants';
import { Article } from 'services/types';
import styled from 'styled-components';

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
  padding-bottom: 40px;
`;

const StickyWrapper = styled.div`
  position: sticky;
  top: 120px;
  padding: 20px 0 200px 20px;
  border-left: 1px solid ${STYLES.color.greyscale50};
`;

const ImageWrapper = styled.div<{ category: keyof typeof CATEGORY }>`
  position: relative;
  width: 60px;
  height: 60px;
  img {
    filter: ${({ category }) => STYLES.iconFilter[category]};
  }
`;

const DlContainer = styled.div`
  flex-wrap: wrap;
`;

const DescriptionWrapper = styled.dl`
  margin-top: 32px;
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
