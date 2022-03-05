import { Divider } from 'components/Common/Divider';
import { Typos } from 'components/Typo';
import { format, parse } from 'date-fns';
import { STYLES } from 'services/constants';
import { Article } from 'services/types';
import styled from 'styled-components';
import { SpaceX } from 'styles/theme';

type LatestArticleProps = Omit<Article, 'slug'> & { isNew: boolean };

const LatestArticle: React.FC<LatestArticleProps> = ({ category, date, title, isNew }: LatestArticleProps) => {
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
      <Typos.Heading5>
        {title}
        {isNew ? <NewBadge /> : null}
      </Typos.Heading5>
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

const NewBadge = styled.sup`
  display: inline-block;
  vertical-align: super;
  width: 6px;
  height: 6px;
  background: ${STYLES.color.primaryDefault};
  border-radius: 100%;
  margin-left: 4px;

  ${Typos.LabelLargeStyle};
`;
