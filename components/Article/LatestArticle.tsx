import { Divider } from 'components/Common/Divider';
import { Typos } from 'components/Typo';
import { format, parse } from 'date-fns';
import { STYLES } from 'services/constants';
import { Article } from 'services/types';
import styled from 'styled-components';
import { SpaceX } from 'styles/theme';

type LatestArticleProps = Omit<Article, 'slug'>;

const LatestArticle: React.FC<LatestArticleProps> = ({ category, date, title }: LatestArticleProps) => {
  return (
    <Wrapper>
      <DescriptionWrapper>
        <Typos.Label type="large" style={{ color: STYLES.color.dark3 }}>
          {category}
        </Typos.Label>
        <Divider />
        <Typos.Label type="large" style={{ color: STYLES.color.dark3 }}>
          {format(parse(date, 'yyyy-MM-dd HH:mm:ss', new Date(date)), 'yyyy년 M월 d일')}
        </Typos.Label>
      </DescriptionWrapper>
      <Typos.Heading5>{title}</Typos.Heading5>
    </Wrapper>
  );
};

export default LatestArticle;

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 15px 0;
  cursor: pointer;

  &:hover ${Typos.Heading5} {
    text-decoration: underline;
  }
`;

const DescriptionWrapper = styled.div`
  display: inline-flex;
  align-items: center;

  ${SpaceX(8)}
`;
