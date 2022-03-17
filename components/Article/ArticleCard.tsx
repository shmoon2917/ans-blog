import Image from 'next/image';

import { Divider } from 'components/Common/Divider';
import { Typos } from 'components/Typo';
import { format, parse } from 'date-fns';
import { CATEGORY, STYLES } from 'services/constants';
import { Article } from 'services/types';
import { getMappedCategory } from 'services/utils';
import styled, { keyframes } from 'styled-components';
import { SpaceX, SpaceY } from 'styles/theme';

type LatestArticleProps = Omit<Article, 'slug' | 'content'> & { isNew: boolean };

const LatestArticle: React.FC<LatestArticleProps> = ({ category, description, date, title, isNew }: LatestArticleProps) => {
  return (
    <Wrapper>
      <GridWrapper>
        <LeftSectionWrapper>
          <ImageWrapper category={category as keyof typeof CATEGORY}>
            <Image src={`/assets/badge/${category.toLowerCase()}.svg`} layout="fill" alt="category__badge" />
          </ImageWrapper>
          <TextWrapper>
            <Typos.Heading2>{title}</Typos.Heading2>
            <Typos.Body1>{description}</Typos.Body1>
          </TextWrapper>
        </LeftSectionWrapper>
        <RightSectionWrapper>
          <Typos.Body1>{format(parse(date, 'yyyy-MM-dd HH:mm:ss', new Date()), 'yyyy년 M월 d일')}</Typos.Body1>
        </RightSectionWrapper>
      </GridWrapper>
    </Wrapper>
  );
};

export default LatestArticle;

const ImageWrapper = styled.div<{ category: keyof typeof CATEGORY }>`
  position: relative;
  flex-shrink: 0;
  width: 40px;
  height: 40px;

  img {
    filter: ${({ category }) => STYLES.iconFilter[category]};
  }

  ${({ theme }) => theme.responsive.md} {
    width: 60px;
    height: 60px;
  }
`;

const LeftSectionWrapper = styled.div`
  display: flex;
  padding-right: ${({ theme }) => theme.padding._4};
  padding-bottom: 0;
  ${SpaceX(16)}

  ${({ theme }) => theme.responsive.md} {
    ${SpaceX(24)}
    align-items: center;
  }

  ${({ theme }) => theme.responsive.xl} {
    grid-column: 1 / span 4;
  }
`;

const RightSectionWrapper = styled.div`
  display: none;

  ${({ theme }) => theme.responsive.xl} {
    padding-left: ${({ theme }) => theme.padding._4};
  }

  ${({ theme }) => theme.responsive.md} {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }

  ${Typos.Body1} {
    color: ${STYLES.color.greyscale800};
  }
`;

const Wrapper = styled.article`
  position: relative;

  outline: 2px solid transparent;
  outline-offset: 2px;

  padding: ${({ theme }) => theme.padding._4};
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 200ms;

  &:hover,
  &:active {
    background-color: ${STYLES.color.greyscale50};
  }

  ${({ theme }) => theme.responsive.md} {
    &:focus,
    &:active {
      background-color: ${STYLES.color.greyscale100};
    }
  }

  ${({ theme }) => theme.responsive.xl} {
    padding: ${({ theme }) => theme.padding._4};
  }
`;

const GridWrapper = styled.div`
  z-index: 10;
  position: relative;
  pointer-events: none;
  ${SpaceY(8)}

  ${({ theme }) => theme.responsive.xl} {
    ${SpaceY(16)}
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
`;

const TextWrapper = styled.div`
  ${SpaceY(6)}

  ${({ theme }) => theme.responsive.xl} {
    ${SpaceY(8)};
  }

  ${Typos.Heading2} {
    line-height: 1.375;
    font-size: 1.4rem;

    ${({ theme }) => theme.responsive.xl} {
      line-height: 1.375;
      font-size: 1.7rem;
    }
  }

  ${Typos.Body1} {
    color: ${STYLES.color.greyscale700};
    word-break: keep-all;
    line-height: 1.55rem;
    font-size: 1rem;
    letter-spacing: -0.025em;

    ${({ theme }) => theme.responsive.xl} {
      font-size: 1.105rem;
      line-height: 2rem;
    }

    ${({ theme }) => theme.responsive.md} {
      line-height: 1.75rem;
    }
  }
`;

const NewBadgeKeyframe = keyframes`
  0% {
    background: ${STYLES.color.red1};
  }
  50% {
    background: ${STYLES.color.red2};
  }
  100% {
    background: ${STYLES.color.red1};
  }
`;

const NewBadge = styled.span`
  position: absolute;
  color: ${STYLES.color.light4};
  padding: 4px 7px;
  background: ${STYLES.color.red0};
  border-radius: 15px;
  margin: 4px 0 0 4px;
  animation: ${NewBadgeKeyframe} 2s infinite;
  ${Typos.LabelSmallStyle};
`;
