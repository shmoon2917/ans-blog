import { Typos } from 'components/Typo';
import { STYLES } from 'services/constants';
import styled from 'styled-components';
import { SpaceX } from 'styles/mixin';

interface LatestArticleProps {
  category: string;
  createdAt: string;
  title: string;
}

const LatestArticle: React.FC<LatestArticleProps> = ({ category, createdAt, title }: LatestArticleProps) => {
  return (
    <a style={{ cursor: 'pointer' }}>
      <LatestArticleContainer>
        <DescriptionArea>
          <Typos.Label type="large" style={{ color: STYLES.colors.dark3 }}>
            {category}
          </Typos.Label>
          <Divider />
          <Typos.Label type="large" style={{ color: STYLES.colors.dark3 }}>
            {createdAt}
          </Typos.Label>
        </DescriptionArea>
        <Typos.Heading5>{title}</Typos.Heading5>
      </LatestArticleContainer>
    </a>
  );
};

export default LatestArticle;

const LatestArticleContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 15px 0;

  &:hover ${Typos.Heading5} {
    text-decoration: underline;
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 8px;
  background: ${STYLES.colors.light0};
`;

const DescriptionArea = styled.div`
  display: inline-flex;
  align-items: center;

  ${SpaceX(8)}
`;
