import Image from 'next/image';

import { Divider } from 'components/Common/Divider';
import { Typos } from 'components/Typo';
import { format, parse } from 'date-fns';
import { CATEGORY, STYLES } from 'services/constants';
import { Article } from 'services/types';
import { getMappedCategory } from 'services/utils';
import styled, { keyframes } from 'styled-components';
import { SpaceX } from 'styles/theme';

type LatestArticleProps = Omit<Article, 'slug' | 'content'> & { isNew: boolean };

const LatestArticle: React.FC<LatestArticleProps> = ({ category, description, date, title, isNew }: LatestArticleProps) => {
  return (
    <Wrapper>
      <ImageWrapper category={category as keyof typeof CATEGORY}>
        <Image src={`/assets/badge/${category.toLowerCase()}.svg`} layout="fill" alt="category__badge" priority />
      </ImageWrapper>
      <ColumnWrapper>
        <Typos.Heading5>
          {title}
          {isNew ? <NewBadge /> : null}
        </Typos.Heading5>
        <DescriptionWrapper>
          <Typos.Label type="large" style={{ color: STYLES.color.dark3 }}>
            {description}
          </Typos.Label>
        </DescriptionWrapper>
      </ColumnWrapper>
    </Wrapper>
  );
};

export default LatestArticle;

const Wrapper = styled.article`
  display: flex;
  gap: 20px;
  padding: 25px ${STYLES.padding.default}px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 200ms;

  &:hover {
    background-color: ${STYLES.color.greyscale50};
  }
`;

const ImageWrapper = styled.div<{ category: keyof typeof CATEGORY }>`
  position: relative;
  width: 60px;
  height: 60px;
  img {
    filter: ${({ category }) => STYLES.iconFilter[category]};
  }
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const DescriptionWrapper = styled.div`
  display: inline-flex;
  align-items: center;

  ${SpaceX(8)}
`;

const NewBadgeKeyframe = keyframes`
  0% {
    background: ${STYLES.color.blue3};
  }
  50% {
    background: ${STYLES.color.primaryDefault};
  }
  100% {
    background: ${STYLES.color.blue3};
  }
`;

const NewBadge = styled.sup`
  display: inline-block;
  vertical-align: super;
  width: 6px;
  height: 6px;
  background: ${STYLES.color.primaryDefault};
  border-radius: 100%;
  margin-left: 4px;
  animation: ${NewBadgeKeyframe} 2s infinite;
  ${Typos.LabelLargeStyle};
`;
